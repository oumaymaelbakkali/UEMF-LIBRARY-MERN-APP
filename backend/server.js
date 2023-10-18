const express= require('express')
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
const path = require('path');
const nodemailer = require('nodemailer');
mongoose.connect('mongodb+srv://Oumayma246:Ouma1234@cluster0.dsblaqt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const user = require('./models/user');
const cors = require('cors');
const { Console } = require('console');
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  
    user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
      if (err) {
        console.error(err);
        res.send('Error finding admin');
        return;
      }
      const sortedBooks = admin.books.sort((a, b) => {
        return new Date(b.Date) - new Date(a.Date);
      });
      
      const recentBooks = sortedBooks.slice(0,4);
      
      res.json(recentBooks);
    });
  });
app.post('/SignIn', (req, res) => { 
    const username = req.body.username;
    const password = req.body.password;
    
    user.findOne({ username: username, password: password }, (err, User) => {
      if (User) {
        
        user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
          if (err) {
            console.error(err);
            
            return;
          }
  
          
          if (username === "Admin" && password === "admin") {
           
            res.send({"Admin":"True"});
            
          } else {
            nom=req.body.username
            res.send({"Profil":"True"});
           
      
          }
        });
      }else {
        res.send({"Error":"True"});
       
      }
    });
  });
app.get('/Admin',(req,res)=>{
    user.findOne({ _id:'650ae834cdf46577d2668c94' }, (err, admin) => {
      if (err) {
        console.error(err);
        res.send('Error finding admin');
        return;
      }
      book=admin.books
      // Render the "tableBook" page and pass the list of books for the admin user
      res.json(book);
    });
   })
app.post('/AddBook',(req,res)=>{
     let file = req.body.photo;
    
     let fileName = file.split('\\').pop();

   
     const newBook = {
      Title: req.body.Title,
      Author: req.body.Author,
      ISBN: req.body.ISBN,
      Summary: req.body.Summary,
      Genre:req.body.Genre,
      photo:fileName,
      statut:'nonreserved',
      reservepar:'non'
    };
    
  
    const id ='650ae834cdf46577d2668c94'
    user.findOne({ _id:id }, (err, User) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error finding user');
      }
      if (!User) {
        return res.status(404).send('User not found');
      }
  
      
      User.books.push(newBook);
  
      User.save((err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error saving user');
        }
        console.log('save')
        user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
          if (err) {
            console.error(err);
            res.send('Error finding admin');
            return;
          }
        books=admin.books
          // Render the "tableBook" page and pass the list of books for the admin user
          res.send({"Admin":"True"});
        });
        
        
        
      });
      
    
    });
  
  
  
  
    
  });
//detail Admin
app.get('/DetailBookAdmin/:Title', (req, res) => {
 
  let title = req.params.Title;
  console.log(title)
  
  
  
  user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
    if (err) {
      console.error(err);
      res.send('Error finding admin');
      return;
    }
    console.log(title)
    
    const book = admin.books.find(b => b.Title === title );
    if (book) {
      console.log('good')
      res.json(book);
      
    } else {
      res.json({err});
      
    }
  });
});
app.get('/Delete/:title', function(req, res) {
  console.log('hii')
  const bookTitle = req.params.title;
  user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
    if (err) {
      console.error(err);
      console.log('hii1')
    }
    if (admin) {
      const bookIndex = admin.books.findIndex(book => book.Title === bookTitle);
      if (bookIndex) {
        admin.books.splice(bookIndex, 1);
        admin.save((err) => {
          if (err) return handleError(err);
          res.send({"Admin":"True"});
          console.log("save") 
          console.log('hii2')
          
        }
      
        )
        
        
        
      } else {
        console.log('hii3')
      
      
      }
    } else {
      res.status(401).send('Unauthorized');
    }
  });

});
// update the book
app.post('/Update/:title',function(req, res) {
  user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
    if (err) {
      console.error(err);
      return;
    }
    // Find the book in the admin's list of books
    const book = admin.books.find(b => b.Title === req.params.title);
    let file = req.body.photo;
    
     let fileName = file.split('\\').pop();
     console.log(fileName)
    if (book) {
        book.Title=req.body.Title
        book.Author=req.Author
        book.Summary=req.body.Summary
        book.Genre=req.body.Genre
        book.photo=fileName
        book.ISBN=req.body.ISBN
      
      // Save the updated admin document in the database
      user.updateOne({ _id: '63aae65af9d5c02039a9f86f' }, { $set: { books: admin.books } },(err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log("the book is update");
            res.send({"Ok":"True"})
          }
          
        }
      );
     

    }
  });
  
})
//create Account
app.post("/CreateAccount", ((req, res) => {
  user.findOne({$or:[{ username: req.body.username},{email: req.body.email }]}, (err, User) => {
    if (err) {
      console.error(err);
      res.send({"Error":"True"});
    }
    if (User) {
      console.log("already")
      res.send({"already":"True"});
    }
    else{
        console.log(req.body.username,)
        console.log(req.body.email)
        const User1 = new user({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });
        User1.save()
      console.log('saved')
        function generateToken() {
          // Generate a random string of letters and numbers
         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         let token = '';
         for (let i = 0; i < 32; i++) {
          token += characters[Math.floor(Math.random() * characters.length)];
         }
         return token;
        }
        
        // Generate the confirmation token
        const confirmationToken = generateToken();
        
        // Create a transport 
        const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'oumaymaelbakkali24@gmail.com',
          pass: 'rbuqduptsqfqmems'
        }
        });

      
          // Send the confirmation email
        sendConfirmationEmail(confirmationToken);
        
        function sendConfirmationEmail(confirmationToken) {
            // Set up the email options
            const mailOptions = {
              from: 'oumaymaelbakkali24@gmail.com',
              to: req.body.email,
              subject: 'Confirm Your Email Address',
              html: '<p>Thank you for signing up! Please click the link below to confirm your email address:</p>' +
                '<a href="http://localhost:3000/confirm/' + confirmationToken + '">Confirm Email</a>'
            };
          
            // Send the email
            transport.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.error(error);
              } else {
                
                res.send({"Mail":"True"});
              }
            });
          }
      
      // Set the emailConfirmed field to true when the user clicks the confirmation link
     
           
          app.get('http://localhost:3000/confirm/:token', (req, res) => {
        // Find the user with the matching token
        if (req.params.token==confirmationToken){
          console.log("user enregistrer")
          User1.save((err) => {
            if (err) {
              console.error(err);
              
              return;
            }
            res.send({"OK":"True"})
           
           
            
            
            
            
     
         
         
        })}
       
      });
      
      
      
      
    }
});
 
 
  
}))
//reserver un book
app.post('/Reserve/:title', (req, res) => {
  let title = req.params.title;
  const {username,password}=req.body
  user.findOne({ username: username, password: password }, (err, User) => {
  if(User){
    // Find the admin document with the id '63aae65af9d5c02039a9f86f'
     user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
    if (err) {
      console.error(err);
      return;
    }

// Add 5 days to the current date
var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);

// Format the date as a string in the desired format
var returnDate = currentDate.toLocaleDateString();
    // Find the book in the admin's list of books
    const book = admin.books.find(b => b.Title === title);
    if (book) {
      book.statut ='reserved';
      book.reservepar=User.username;
      book.returnLe=returnDate

      // Save the updated admin document to the database
      user.updateOne({ _id: '650ae834cdf46577d2668c94' }, { $set: { books: admin.books ,reservepar:book.reservepar} },
        (err, result) => {
          if (err) {
            console.error(err);
          } else {
            
          }
          
        }
      );
      

      const NewBook= {
        Title:book.Title,
        Author:book.Author,
        Summary:book.Summary,
        Genre:book.Genre,
        photo:book.photo,
        statut:book.statut,
        returnLe:returnDate
      }
      User.books.push(NewBook)
      User.save((error) => {
        if (error) {
          console.error(error);
        } else {
          
        }
      });
     res.send({"ok":"True"});
    } else {
      console.log(`Book with title "International Business" was not found in admin's list of books.`);
      
    }
  });
     
   }

  });
  
  
});
app.get('/MyList/:Name', (req, res) => {
  const username = req.params.Name;
  user.findOne({ username: username}, (err, User) => { 
    if (err) {
      // handle error
      console.error(err);
      res.sendStatus(500);
    } else if (User) {
      res.json(User.books);
      
      
    } else {
      // user document not found
      res.sendStatus(404);
    }
  });
});
app.get('/delete-reservation/:Name/:title', function(req, res) {
  
  const bookTitle = req.params.title;
 user.findOne({ username: req.params.Name }, (err, User) => {
  if (err) {
    console.error(err);
    return res.status(500).send('Error finding admin');
  }
  if (User) {
    const bookIndex = User.books.findIndex(book => book.Title === bookTitle);
    if (bookIndex) {
      User.books.splice(bookIndex, 1);
      User.save((err) => {
        if (err) return handleError(err);
        
      });
    } 
     // Save the updated admin document to the database
     user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
      if (err) {
        console.error(err);
        return;
      }
    
      // Find the book in the admin's list of books
      const book = admin.books.find(b => b.Title === bookTitle);
      if (book) {
        book.statut = 'non';
        book.reservepar='non';
        user.updateOne({ _id: '650ae834cdf46577d2668c94' }, { $set: { books: admin.books ,reservepar:admin.reservepar} },
        (err, result) => {
          if (err) {
            console.error(err);
          } else {
            res.send({"ok":"True"})
          }
          
        }
      );
        
    
       
        
    }});
    
  }
});

      

});
app.get('/Search/:GENRE', (req, res) => {
  let Genre = req.params.GENRE;

  function searchBooks(books) {
    const searchResults = [];
    for (const book of books) {
      if (book.Genre === Genre) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  user.findOne({ _id: '650ae834cdf46577d2668c94' }, (err, admin) => {
    if (err) {
      console.error(err);
      res.send('Error finding admin');
      return;
    }
    const searchResults = searchBooks(admin.books);
   
    res.json(searchResults);

  });
});

app.post('/Search', (req, res) => {
  let Genre = req.query.GENRE;

  function searchBooks(books) {
    const searchResults = [];
    for (const book of books) {
      if (book.Genre === Genre) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  user.findOne({ _id: '63aae65af9d5c02039a9f86f' }, (err, admin) => {
    if (err) {
      console.error(err);
      res.send('Error finding admin');
      return;
    }
    const searchResults = searchBooks(admin.books);
   
    console.log('oumayma')
   res.send({"ok":"True"})
 })
 .catch((err) =>{
  console.error(err);
  res.send('Error finding admin');
  return;
 })
  
    
   
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

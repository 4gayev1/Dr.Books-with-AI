


const Contact = () => {
  return (
    <div>
   <section class="mb-4">

<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

<p class="text-center w-responsive mx-auto mb-5">We happy to serve you</p>

<div class="row">

    
    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row">

                
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control"/>
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                

                
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control"/>
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
                

            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>

            <div class="row">

                
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    

    
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Baku, Az0000, Azerbaijan</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+994000000000</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@gmail.com</p>
            </li>
        </ul>
    </div>
    

</div>

</section>

{/* <h1 style=" color: green; text-align: center ; font-weight: bold; font-family: 'Ramaraja', serif; ">Contact Us <br/> We happy to serve you</h1>
     
 <div class="formst">
    <form >
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="basic-addon1">Name</span>
        <input type="text" class="form-control" placeholder="Bob" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
     
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  
    </form>
  </div>

    <div style="height: 100px;">
        <img src="/photos/background-book.jpg" style="width: 450px; height:450px;position: absolute;top:147px;right:70px; "/>
    </div>
    <div class="logo" >
        <img src="/photos/instalogo.png" style="width: 50px;height: 50px;position: absolute;
         right: 450px; top:530px; filter: brightness(100%); border-radius: 30px;
         margin-top: 20px;"/> <a href="#" style="color:green; position: absolute; right: 370px; top: 560px; text-decoration: none;">Instagram</a>
    </div> */}

    </div>
  )
}

export default Contact;
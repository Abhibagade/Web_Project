//changing signin and signup context
const container=document.querySelector('.container');

//changing heading from Sign-In to Sign-Up(IN<--->Up)
const headingSpan2=document.querySelector('.heading-span-2');
const form=document.querySelector('form');
const clearForm=()=>{
    document.querySelectorAll(".form-input-wrapper").forEach((item)=>{
        item.className='form-input-wrapper';
    });
    form.reset();
}


document.querySelector('.signup-btn').addEventListener('click', ()=>{
    container.classList.add('change');
    setTimeout(()=>{
    headingSpan2.textContent='Up';
    }, 200);
    form.className='form sign-up';
    clearForm();
});

document.querySelector('.signin-btn').addEventListener('click', ()=>{
    container.classList.remove('change');
    setTimeout(()=>{
    headingSpan2.textContent='In';
    }, 200);
    form.className='form sign-in';
    clearForm();
});



//for required field
const userName=document.getElementById('userName');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
//Error MSG
const error=(input, message)=>{
    const inputWrapper=input.parentElement;
    inputWrapper.className="form-input-wrapper error";
    inputWrapper.querySelector('.message').textContent=message;
}

//Success MSG
const sucess=(input)=>{
    const inputWrapper=input.parentElement;
    inputWrapper.className="form-input-wrapper success";
}

const checkRequiredFields=(inputArr)=>{
    inputArr.forEach((input) => {
        if(input.value.trim()==="")
        {
            if(input.id==="confirmPassword")
            {
                error(input, 'Password confirmation is required');
            }
            else
            {
                error(input, `${input.id} is required`);        
            }
        }
        else
        {
            sucess(input);
        }
    });
}


//for password length if not strong then error occured
const checkLength=(input, min, max)=>{
    if(input.value.length < min)
    {
        error(input, `${input.id} must be at least ${min} characters`);
    }
    else if(input.value.length > max)
    {
        error(input, `${input.id} must be less than ${max} characters`);
    }
    else
    {
        sucess(input);
    }
}

//for matching password and confirm-Password
const matchPassword=(input1, input2)=>{
    if(input1.value!==input2.value)
    {
        error(input2, "Password do not Matched...!")
    }
}

//check email correct or not
const checkEmail=(input)=>{
  const emailValue=input.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(emailPattern.test(emailValue)==false)
  {
    error(input, "Invalid E-mail ID...");
  }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(form.classList[1]==='sign-up')
    {
        checkRequiredFields([userName, email, password, confirmPassword]);
        checkLength(userName, 2, 25);
        checkLength(password, 6, 15);
        matchPassword(password, confirmPassword);
        checkEmail(email);
    }
    else
    {
        checkRequiredFields([email, password]);
        checkEmail(email);
        checkLength(password, 6, 15);
    }
});


//hide and show logos
const signUpButton=document.querySelector('.signup-btn');
const singInButton=document.querySelector('.signin-btn');
const userNameImg=document.getElementById('usernameImage');
const passwordImg=document.getElementById('passwordImage');

signUpButton.addEventListener('click', () =>{
    userNameImg.style.display='none';
    passwordImg.style.display='none';
});

singInButton.addEventListener('click', ()=>{
    userNameImg.style.display='block';
    passwordImg.style.display='block';
})

/*
1) tag
# <h1></h1>, <h2>

2) element
# it is the tag with content
# <h1> hello how are you </h1>

3) attribute
# key-value pair
# textAlign: "center"

*** <span></span> *** tag : it is use to do some work on particular small section.

*******class attribute ******
* to group the multiple html tags
* it is denoted by '.'


*******id attrubue *******
* these are unique
* it is denoted by "#"
<h1 id = "unique" > hello world </h1>
<h1> i am not unique </h1>
h1 { // Both the 'h1' will be blue
  color: blue;
}
#nique { // only unique 'h1' will be blue
  color: blue;
}


<h1 class = "greet"> Hello </h2>
<h2> how </h2>
<p> are you </p>

h1 {
  color: blue;
}
h2 {
  color: blue;
}

****div tag *****
it is the section/container

******* css selector ********
html:
<div>
  <p> hello </p>
  <h1> hi </p>
</div>
<h1>yolo</h1>

<div>
  <p>
    <span> Hello </span> 
  </p>
  
</div>

div > p >apan {// '>' it represents imegeate decendent

  ***sibling selector***
  <div class " sonu monu">// <h1 class "sonu" class ="monu">
    select me
  </div>

  <div class="sonu"> will get select me ? </div>
  <div class = "monu"> will you select me ?</div>

}

css:
div h1 {// here 'h1' is decendent of the 'div'
  color: blue;
}

*** sibling selector css ****
.sonu .monu {// hame ek aisa tag dhundna h jisme sonu and monu dono classes hon.

  color: blue;
}

******css selector *******
<input value = "write here">

css:
input[ type = "text"]{
  color:blue;
}
*/

<h1 class="header">ลงชื่อเข้าใช้</h1>
<form method="POST" action="?/login">
<div class="container">
<label>
รหัสนักศึกษา
<br>
    <input name="username" placeholder="Username" type="username"required/>
</label>
<br>
<br>

<label>
เลขประจำตัวประชาชน
<br>
<input name="password" type="password" placeholder="PassWord" required/>


</label>
<br>
<br>
<button>Submit</button>
 </div>

</form>




<script>


  

      

  </script>



<style>
.container button{
background-color: #04AA6D;
border-radius: 1em;
padding-bottom:10px;
padding-left:24px;
padding-right:24px;
padding-top:10px;



}

.header{
  margin: auto;
  text-align: center;
}
.container{
  margin-top: 100px;
  text-align: center;
}

input{
width: 50%;
  height: 50px;
  text-align: center;
  border: 1px solid #ccc; 
  border-radius: 1.25rem;
}

</style>
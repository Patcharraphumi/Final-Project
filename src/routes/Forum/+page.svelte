


  <button onclick={Add}>Add Item</button>


<div bind:this={container}>
    <div style="background-color: #d3d3d3;
  margin: 10px;
  padding: 20px;
  font-size: 24px;"></div>
</div>



<script>

      let container;

       
      function Add(){

            // You can manipulate the container element here if needed
            let item = document.createElement('div');
            item.textContent = 'Dynamically added item';
            item.style.backgroundColor = '#d3d3d3';
            
            container.appendChild(item);    
              
    

    }
    








    




</script>


<style>
.container {
  display: flex;
  padding: 10px;
}
.container > div {
  background-color: #d3d3d3;
  margin: 10px;
  padding: 20px;
  font-size: 24px;
}

</style>
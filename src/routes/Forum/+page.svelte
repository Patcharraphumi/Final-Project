<h1>Forum Creation</h1>



<div class="container">
    <div>hello</div>
    <div>hello</div>
</div>

<h1>Count</h1>
  <button on:click={Add}>Add Item</button>

<script>
    let items = [{Name:"Jane Doe", Age:25}, {Name:"John Smith", Age:30}];

    function Add() {
        items = [...items, {Name:"New User", Age:20}];
    }
    console.log(items);
</script>

<style>
.container {
  display: flex;
  padding: 10px;
}
.container div {
  background-color: #d3d3d3;
  margin: 10px;
  padding: 20px;
  font-size: 24px;
}
</style>


<script type='text/javascript' src='config.js'></script>
<script type='text/javascript' src='script.js'></script>   
fetch('http://localhost:3001/api/data')
  .then(response => response.json())
  .then(data => console.log(data));   

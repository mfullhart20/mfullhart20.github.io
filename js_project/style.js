body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  animation: fadeIn 1s ease-in-out;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

input[type="text"],
button {
  padding: 8px;
  margin: 8px;
  border: none;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

#teaInfo {
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: none;
  animation: fadeInAnimation 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

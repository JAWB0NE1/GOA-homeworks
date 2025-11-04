import React from 'react';
//პირველი ხაზი: შემოგვაქვს რეაქტის ბიბლიოთეკა
import { createRoot } from 'react-dom/client';
//მესამე ხაზი: შემოგვაქვს createRoot ფუნქცია react-dom/client ბიბლიოთეკიდან
const container = document.getElementById('app');
//მეხუთე ხაზი: ვიღებთ HTML ელემენტს "app" ID-ით
const root = createRoot(container);
root.render(
  <div>
      <h1>Hello world</h1> 
      <p>Lorem text</p>
  </div>
)
//8-13:გამოგვაქვს "Hello world" და "Lorem text" 
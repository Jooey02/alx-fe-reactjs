import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import FormikForm from './components/FormikForm.js';

function App() {
  return (
    <div className="App">
      <h1>User Registration (Controlled Components)</h1>
      <RegistrationForm />
      <h1>User Registration (Formik)</h1>
      <FormikForm />
    </div>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginForm from './components/LoginForm'; 
function App() {
  
  return  (
    <div className='App container pt-5'>
    <div className="text-center">
      <h1 className='mb-5'>Build a React Modal Popup Login Form With Hooks and Get Values</h1>
      <p className='mb-3'>This is a brief description of the React Modal Popup Login Form. You can use hooks to manage the form state and retrieve input values............</p>
      <button 
        type="button" 
        className="btn btn-primary btn-lg rounded-pill px-5 py-3" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal" 
        style={{
          backgroundImage: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          transition: 'box-shadow 0.3s ease',
        }}
      >
        Open Login Form
        <span className="visually-hidden">Login Form</span> {}
      </button>
    </div>
    
  

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <LoginForm />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

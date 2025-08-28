// import { useState } from "react";
// import { Navbar, Container, FormControl, Nav, Modal , Button , Form  } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import { PiShoppingCartLight } from "react-icons/pi";
// import { Link , useNavigate} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logOutAsync} from "../Services/Actions/userAction"; 
// import logo from "../assets/images/logo.svg";
// import bannerPharma from "../assets/images/banner1.jpg";
// import bannerPet from "../assets/images/banner2.jpg";
// import bannerBaby from "../assets/images/banner3.jpg";

// import paan from "../assets/images/paan.png";
// import dairy from "../assets/images/dairy.png";
// import fruits from "../assets/images/fruits.png";
// import drinks from "../assets/images/drinks.png";
// import snacks from "../assets/images/snacks.png";
// import breakfast from "../assets/images/breakfast.png";   
// import sweet from "../assets/images/sweet.png";
// import biscuits from "../assets/images/biscuits.png";
// import tea from "../assets/images/tea.png";
// import atta from "../assets/images/atta.png";
// import masala from "../assets/images/masala.png";
// import sauces from "../assets/images/sauces.png";
// import meat from "../assets/images/meat.png";
// import organic from "../assets/images/organic.png";
// import baby from "../assets/images/baby.png";
// import pharma from "../assets/images/pharma.png";
// import cleaning from "../assets/images/cleaning.png";
// import home from "../assets/images/home.png";
// import personal from "../assets/images/personal.png";
// import pet from "../assets/images/pet.png";


// const BlinkitHeader = ({ onSearch }) => {
//   const categories = [
//     { img: paan, label: "Paan Corner" },
//     { img: dairy, label: "Dairy, Bread & Eggs" },
//     { img: fruits, label: "Fruits & Vegetables" },
//     { img: drinks, label: "Cold Drinks & Juices" },
//     { img: snacks, label: "Snacks & Munchies" },
//     { img: breakfast, label: "Breakfast & Instant Food" },
//     { img: sweet, label: "Sweet Tooth" },
//     { img: biscuits, label: "Bakery & Biscuits" },
//     { img: tea, label: "Tea, Coffee & Health Drink" },
//     { img: atta, label: "Atta, Rice & Dal" },
//     { img: masala, label: "Masala, Oil & More" },
//     { img: sauces, label: "Sauces & Spreads" },
//     { img: meat, label: "Chicken, Meat & Fish" },
//     { img: organic, label: "Organic & Healthy Living" },
//     { img: baby, label: "Baby Care" },
//     { img: pharma, label: "Pharma & Wellness" },
//     { img: cleaning, label: "Cleaning Essentials" },
//     { img: home, label: "Home & Office" },
//     { img: personal, label: "Personal Care" },
//     { img: pet, label: "pet" },

//     ];

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.userReducer);

//   const [showLogin, setShowLogin] = useState(false);
//   const [loginData, setLoginData] = useState({ email: "", password: "" });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(loginAsync(loginData));
//     setShowLogin(false); 
//   };

//   const handleLogOut = () => {
//     dispatch(logOutAsync());
//     navigate("/"); 
//   };

//   return (
//     <>
//       <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm border-bottom py-2">
//         <Container style={{ maxWidth: "1666px", height: "86px" }} className="d-flex align-items-center justify-content-between">
//           <div className="d-flex align-items-center">
//             <Link to="/" className="text-decoration-none d-flex align-items-center me-4">
//               <img src={logo} alt="Blinkit" height={30} width={134} />
//             </Link>
//             <div>
//               <div style={{ fontWeight: 800 }}>Delivery in 13 minutes</div>
//               <div style={{ fontSize: "14px", color: "#555" }}>
//                 Sankalp Recidency, Sarthana Jakatnaka ▼
//               </div>
//             </div>
//           </div>

//           <div className="flex-grow-1 mx-4" style={{ height: "47px", width: "844px" }}>
//             <div className="input-group">
//               <span className="input-group-text bg-white border-end-0">
//                 <FaSearch className="text-muted" />
//               </span>
//               <FormControl
//                 type="search"
//                 placeholder='Search "Chips"'
//                 onChange={(e) => onSearch(e.target.value)}
//                 style={{
//                   backgroundColor: "#f8f8f8",
//                   borderLeft: "none",
//                   borderTopRightRadius: "8px",
//                   borderBottomRightRadius: "8px",
//                 }}
//               />
//             </div>
//           </div>

//              <Nav className="align-items-center gap-4">
//             {!user ? (
//                   <button
//                     onClick={() => navigate('/signIn')}
//                     style={{
//                       backgroundColor: '#8b8fe8ff',
//                       color: '#000000ff',
//                       padding: '10px 20px',
//                       border: 'none',
//                       borderRadius: '5px',
//                       cursor: 'pointer',
//                       fontSize: '16px',
//                       transition: 'background 0.3s ease',
//                     }}
//                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#7f83f0ff')}
//                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#8472ecff')}
//                   >
//                     Login
//                   </button>

//             ) : (
//               <>
//                 <span className="fw-semibold text-dark">{user.email}</span>
//                 <Button 
//                   variant="outline-danger"
//                   onClick={handleLogOut}
//                   style={{ fontWeight: "600", padding: "6px 16px", height: "42px" }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             )}
//             <Nav.Link as={Link} to="/add-product" className="text-dark d-flex align-items-center">
//               <Button
//                 className="d-flex align-items-center justify-content-center gap-2"
//                 style={{
//                   backgroundColor: "#53a0e8ff",
//                   border: "none",
//                   fontWeight: "600",
//                   color: "#fff",
//                   padding: "6px 16px",
//                   height: "52px",
//                   width: "112px",
//                   transition: "background-color 0.3s, transform 0.2s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#cccccc";
//                   e.target.style.transform = "scale(1.05)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#3aa7bbff";
//                   e.target.style.transform = "scale(1)";
//                 }}
//               >
//                 <PiShoppingCartLight style={{ height: "50px", width: "50px" }} />
//                 Add Product
//               </Button>
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Container style={{ maxWidth: "1320px", height: "226px" }}>
//         <div style={{
//         borderRadius: "16px",
//         width: "335px",
//         height: "195px",
//         margin: "25px",
//         display: "flex",
//         flexDirection: "Row",
//         gap: "20px",
//         justifyContent: "space-between" }}>
//         <img src={bannerPharma} alt="Pharma"/>
//         <img src={bannerPet} alt="Pet Care"/>
//         <img src={bannerBaby} alt="Baby Care"/>
//         </div>
//       </Container>

      
//       <div className="bg-white border-bottom py-3">
//         <Container style={{ maxWidth: "1320px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "flex-start",
//             }}
//           >
//             {categories.map((cat, index) => (
//             <div key={index} style={{ textAlign: "center" }}>
//               <img src={cat.img} alt={cat.label} style={{
//                 width: "129px",
//                 height: "188px",
//                 borderRadius: "12px",
//                 objectFit: "contain",
//                 marginBottom: "8px",
//             }}/>
//             </div>
//             ))}

//           </div>
//         </Container>
//       </div>

//        <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Sign In</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={loginData.email}
//                 onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={loginData.password}
//                 onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Button type="submit" variant="primary" className="w-100">Login</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default BlinkitHeader;


import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogTyrantHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container style={{ maxWidth: "1600px" }}>
        
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{ color: "red", fontWeight: "700", fontSize: "22px" }}>BLOG</span>
          <span style={{ color: "#fff", fontWeight: "700", fontSize: "22px", marginLeft: "4px" }}>TYRANT</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="blog-navbar" />
        <Navbar.Collapse id="blog-navbar" className="justify-content-end">
          
          {/* Menu Links */}
          <Nav className="me-4">
            <Nav.Link as={Link} to="/who" className="fw-bold text-white">WHO?</Nav.Link>
            <Nav.Link as={Link} to="/updates" className="fw-bold text-white">UPDATES</Nav.Link>
            <Nav.Link as={Link} to="/tools" className="fw-bold text-white">TOOLS</Nav.Link>
            <Nav.Link as={Link} to="/best-of" className="fw-bold text-white">BEST OF</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="fw-bold text-white">THE BLOG</Nav.Link>
          </Nav>

          {/* CTA Button */}
          <Button
            style={{
              backgroundColor: "#f4c430",
              color: "#000",
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              padding: "8px 14px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffdb58")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f4c430")}
          >
            ★ STARTING A NEW BLOG?
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogTyrantHeader;

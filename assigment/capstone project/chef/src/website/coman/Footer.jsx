import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row g-4">

          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <h4 className="mb-4 text-primary">FoodieHub</h4>
            <p className="text-secondary">
              Experience the best flavors crafted with passion and served with love.
              Fresh ingredients, authentic taste, and unforgettable moments.
            </p>
            <div>
              <a href="#" className="text-light me-3 fs-5"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3 fs-5"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light me-3 fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">About</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Menu</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Chefs</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Contact Us</h5>
            <p className="text-secondary mb-2">
              <i className="bi bi-geo-alt me-2"></i>Gujarat, India
            </p>
            <p className="text-secondary mb-2">
              <i className="bi bi-envelope me-2"></i>support@foodiehub.com
            </p>
            <p className="text-secondary">
              <i className="bi bi-telephone me-2"></i>+91 98765 43210
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Newsletter</h5>
            <p className="text-secondary">Subscribe to get latest offers and updates.</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-3 mt-4">
        <p className="mb-0 text-secondary">
          © 2026 <span className="text-light fw-bold">FoodieHub</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

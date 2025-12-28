class FeedbackFormHandler {
    constructor() {
        this.form = document.getElementById("guestForm");

        // Fields
        this.Name = document.getElementById("Name");
        this.NameErr = document.getElementById("nmerr");
        this.Phone = document.getElementById("Phone");
        this.PhoneErr = document.getElementById("pmerr");
        this.Email = document.getElementById("email");
        this.EmailErr = document.getElementById("emerr");
        this.CheckIn = document.getElementById("checkin");
        this.CheckInErr = document.getElementById("cierr");
        this.CheckOut = document.getElementById("checkout");
        this.CheckOutErr = document.getElementById("coerr");
        this.Adults = document.getElementById("adults");
        this.AdultsErr = document.getElementById("aderr");
        this.Purpose = document.getElementById("purpose");
        this.PurposeErr = document.getElementById("purr");
        this.output = document.getElementById("output");

        this.PhoneRegex = /^\d{10}$/;
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        this.form.addEventListener("submit", e => this.handleSubmit(e));
        this.form.addEventListener("input", e => this.validateField(e));
        this.form.addEventListener("change", e => this.validateField(e));
    }

   handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
        this.storeData();
        this.output.innerHTML = `<div class="alert alert-success">Form Submitted Successfully ✅</div>`;
        
        
        setTimeout(() => {
            this.output.innerHTML = "";
        }, 3000);

        this.form.reset();
    }
}

    validateForm() {
        this.validateName();
        this.validatePhone();
        this.validateEmail();
        this.validateCheckIn();
        this.validateCheckOut();
        this.validateAdults();
        this.validatePurpose();
        return (
            !this.NameErr.innerHTML &&
            !this.PhoneErr.innerHTML &&
            !this.EmailErr.innerHTML &&
            !this.CheckInErr.innerHTML &&
            !this.CheckOutErr.innerHTML &&
            !this.AdultsErr.innerHTML &&
            !this.PurposeErr.innerHTML
        );
    }

    validateField(e) {
        switch (e.target.id) {
            case "Name": this.validateName(); break;
            case "Phone": this.validatePhone(); break;
            case "email": this.validateEmail(); break;
            case "checkin": this.validateCheckIn(); break;
            case "checkout": this.validateCheckOut(); break;
            case "adults": this.validateAdults(); break;
            case "purpose": this.validatePurpose(); break;
        }
    }

    validateName() {
        if (this.Name.value.trim().length < 3) {
            this.NameErr.innerHTML = "Name must be at least 3 characters";
            this.Name.style.border = "2px solid red";
        } else {
            this.NameErr.innerHTML = "";
            // this.Name.style.border = "2px solid green";
        }
    }

    validatePhone() {
        if (!this.PhoneRegex.test(this.Phone.value)) {
            this.PhoneErr.innerHTML = "Enter valid 10 digit phone";
            this.Phone.style.border = "2px solid red";
        } else {
            this.PhoneErr.innerHTML = "";
        //     this.Phone.style.border = "2px solid green";
        }
    }

    validateEmail() {
        if (!this.emailRegex.test(this.Email.value.trim())) {
            this.EmailErr.innerHTML = "Invalid email";
            this.Email.style.border = "2px solid red";
        } else {
            this.EmailErr.innerHTML = "";
            // this.Email.style.border = "2px solid green";
        }
    }

    validateCheckIn() {
        if (!this.CheckIn.value) {
            this.CheckInErr.innerHTML = "Check-in date required";
            this.CheckIn.style.border = "2px solid red";
        } else {
            this.CheckInErr.innerHTML = "";
            // this.CheckIn.style.border = "2px solid green";
        }
    }

    validateCheckOut() {
        if (!this.CheckOut.value || this.CheckOut.value <= this.CheckIn.value) {
            this.CheckOutErr.innerHTML = "Check-out must be after check-in";
            this.CheckOut.style.border = "2px solid red";
        } else {
            this.CheckOutErr.innerHTML = "";
            // this.CheckOut.style.border = "2px solid green";
        }
    }

    validateAdults() {
        if (this.Adults.value <= 0) {
            this.AdultsErr.innerHTML = "Adults must be at least 1";
            this.Adults.style.border = "2px solid red";
        } else {
            this.AdultsErr.innerHTML = "";
            // this.Adults.style.border = "2px solid green";
        }
    }

    validatePurpose() {
        if (!this.Purpose.value.trim()) {
            this.PurposeErr.innerHTML = "Select purpose";
            // this.Purpose.style.border = "2px solid red";
        } else {
            this.PurposeErr.innerHTML = "";
            // this.Purpose.style.border = "2px solid green";
        }
    }

    storeData() {
        const record = {
            name: this.Name.value.trim(),
            phone: this.Phone.value.trim(),
            email: this.Email.value.trim(),
            checkin: this.CheckIn.value,
            checkout: this.CheckOut.value,
            adults: this.Adults.value,
            purpose: this.Purpose.value.trim()
        };

        const data = JSON.parse(sessionStorage.getItem("hotelData")) || [];
        data.push(record);
        sessionStorage.setItem("hotelData", JSON.stringify(data));
    }
}

new FeedbackFormHandler();

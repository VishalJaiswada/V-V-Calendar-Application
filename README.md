# Calendar Application for Communication Tracking

![Application Preview](https://your-live-app-image-url.com)

This is a **React-based Calendar Application** designed to efficiently track and manage communications with companies. It includes features like company management, communication tracking, notifications for overdue tasks, and more, providing a user-friendly interface to streamline follow-ups and maintain professional relationships.

---

## **Live Demo**

Explore the live version of this project: [Calendar Application](https://your-live-app-url.com)

---

## **Features**

### **Admin Module**
- **Company Management:** Add, edit, and delete companies with details like name, location, LinkedIn profile, email, and phone numbers.
- **Communication Methods:** Define sequences and mandatory steps for communication (e.g., LinkedIn Post, Email, Phone Call).

### **User Module**
- **Dashboard:**
  - View last five communications and next scheduled tasks for each company.
  - Color-coded highlights for overdue (red) and due-today (yellow) communications.
- **Calendar View:**
  - Past and upcoming communication events.
- **Notifications:**
  - Overdue and due communications.
  - Interactive hover tooltips.

### **Reporting and Analytics (Optional)**
- Communication frequency and engagement reports.
- Export data in PDF/CSV formats.

---

## **Setup and Deployment**


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VishalJaiswada/V-V-Calendar-Application.git
   cd calendar-application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application at `http://localhost:3000` in your browser.

### Deployment

Deploy the application on platforms like Vercel, Netlify, or GitHub Pages.

---

## **Tech Stack**

- **Frontend:** React, Tailwind CSS
- **State Management:** Context API
- **Date Handling:** date-fns
- **Deployment:** Vercel

---

## **Project Links**

- **Live Demo:** [https://your-live-app-url.com](https://your-live-app-url.com)
- **GitHub Repository:** [https://github.com/VishalJaiswada/V-V-Calendar-Application.git](https://github.com/VishalJaiswada/V-V-Calendar-Application.git)
- **LinkedIn Profile:** [https://www.linkedin.com/in/vishal-patel-71084a235/](https://www.linkedin.com/in/vishal-patel-71084a235/)

---

## **Application Structure**

```
calendar-application/
├── src/
│   ├── Pages/
│   │   ├── Dashboard
│   │   ├── Companies
│   │   └── Calendar
│   │   └── Reports
│   ├── store/
│   │   └── useStore.js
│   ├── utils/
│   │   └── dateUtils.js
│   ├── App.txs
│   └── index.css
│   └── main.tsx
├── public/
│   └── index.html
└── package.json
```

---

## **Future Enhancements**

- Add login/authentication for admin and user roles.
- Implement advanced reporting and analytics with real-time activity logs.
- Integrate reminders using email or SMS APIs.

---

## **Screenshots**

![Calendar](Calendar Application ENTNT\image1.png)
![Report](Calendar Application ENTNT\image2.png)
*Example of the Dashboard showing communication tracking.*

---

## **License**

This project is licensed under the MIT License. Feel free to use, modify, and share it.

---

## **Contact**

For any inquiries or suggestions, feel free to connect:

- **Email:** vp022570@gmail.com
- **LinkedIn:** [https://www.linkedin.com/in/vishal-patel-71084a235/](https://www.linkedin.com/in/vishal-patel-71084a235/)
- **GitHub:** [https://github.com/VishalJaiswada](https://github.com/VishalJaiswada)

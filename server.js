const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ตั้งค่าให้ Express ใช้โฟลเดอร์ public สำหรับไฟล์ static เช่น CSS, รูปภาพ
app.use(express.static(path.join(__dirname, 'public')));

// ตั้งค่าเส้นทาง (routes) สำหรับแต่ละหน้า
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/exp', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'exp.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'project.html'));
  });

// เริ่มต้น server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

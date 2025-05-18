# Proviz


## 🛠️ Project Setup Instructions

### ⚙️ Backend Setup (Flask)

1. **Navigate to the backend folder**:
   ```bash
   cd backend
   ```

2. **Create a virtual environment**:
   ```bash
   python3 -m venv venv
   ```

3. **Activate the virtual environment**:

   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Start the backend server**:
   ```bash
   ./startserver.sh
   ```

---

### 🌐 Frontend Setup (React + Vite)

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend/proviz-frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend server**:
   ```bash
   ./startfrontend.sh
   ```

---

### ✅ Development URLs

- **Frontend**: [http://127.0.0.1:5173](http://127.0.0.1:5173)
- **Backend**: [http://127.0.0.1:5001](http://127.0.0.1:5001)

Make sure the backend is running before accessing the frontend to avoid CORS or fetch-related errors.

---

## 📁 Folder Structure

```
Proviz/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── startserver.sh
└── frontend/
    └── proviz-frontend/
        ├── package.json
        └── startfrontend.sh
```

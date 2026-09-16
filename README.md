# Sistec ERP Mobile App 📱

A modern, high-performance Educational Resource Planning (ERP) mobile application built with **React Native** and **Expo Router**. 

This application provides a dedicated interface for both Students and Teachers, allowing seamless management of academic data, attendance, results, and administrative tasks.

## 🚀 Features

* **Multi-Role Authentication**: Secure login system with dynamic routing that intelligently directs users to either the Student Portal or the Teacher Dashboard based on their credentials.
* **Global Authentication State**: Utilizes React Context API to manage user sessions, ensure protected routing, and dynamically inject user data (Name, ID, Role) across the app.
* **Student Dashboard**: A comprehensive hub for students to view their Attendance, Class Schedules, Results, Exam Hall Tickets, and more.
* **Teacher Dashboard**: A specialized portal for educators to manage student Attendance, upload Results, handle Leaves, and oversee Internal Marks.
* **High-Performance Assets**: UI icons have been optimized through a custom processing pipeline, converting heavy SVGs to crisp, crash-free PNGs for flawless rendering on older Android and iOS devices.
* **Modern UI/UX**: Designed with a clean, professional aesthetic featuring custom typography, responsive grid layouts, and consistent theming.

## 🛠️ Technology Stack

* **Framework**: React Native (Expo SDK 57)
* **Routing**: Expo Router v3 (File-based routing)
* **Language**: TypeScript
* **State Management**: React Context API
* **Icons**: `@expo/vector-icons` (FontAwesome, MaterialIcons)
* **Backend**: MongoDB (Integration in progress)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruvmishrath-debug/sistec_ERP.git
   cd sistec_ERP/student-erp-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Metro Bundler**
   ```bash
   npx expo start -c
   ```

4. **Run the App**
   * Press `i` to open in iOS Simulator
   * Press `a` to open in Android Emulator
   * Scan the QR code with the **Expo Go** app on your physical device.

## 🔑 Demo Credentials

Currently, the app uses a mocked authentication state to demonstrate the UI. You can use the following formats to log in:

* **Student Login**: Any ID starting with `S` (e.g., `S123`)
* **Teacher Login**: Any ID starting with `T` (e.g., `T123`)
* **Password**: Any password

---
*Developed with precision to match the original Student Portal AI experience.*
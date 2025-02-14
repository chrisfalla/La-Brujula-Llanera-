# La Brújula Llanera 🌍
_Aplicación de turismo para Yopal - React Native & Expo_

---

## 🚀 Comenzando

### 👋 Requisitos
- Node.js v18+
- Git
- Dispositivo Android/iOS o emulador

---

## 🔧 Configuración completa

### 1. Clonar repositorio
```bash
git clone https://github.com/tu-usuario/La-Brujula-Llanera.git
cd La-Brujula-Llanera
```

### 2. Instalar dependencias
```bash
npm install -g expo-cli  # Instalar Expo CLI globalmente
npm install              # Instalar dependencias del proyecto
```

### 3. Configurar Git (si empiezas desde cero)
```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/La-Brujula-Llanera.git
git push -u origin main
```

## ▶️ Ejecutar la aplicación

### Desarrollo local
```bash
npx expo start  # Inicia Metro Bundler

# Opciones después de iniciar:
# - Android: Presiona 'a'
# - iOS: Presiona 'i'
# - Web: Presiona 'w'
```

### Probar en dispositivo físico
- Instala **Expo Go** en tu teléfono.
- Escanea el QR mostrado en la terminal.

---

## 🔄 Flujo de trabajo con Git

### Actualizar repositorio local
```bash
git pull origin main
```

### Hacer cambios y subirlos
```bash
git checkout -b feature/nueva-funcionalidad  # Crear rama
git add .                                    # Agregar cambios
git commit -m "Agrega nueva funcionalidad"   # Hacer commit
git push origin feature/nueva-funcionalidad  # Subir rama
```

### Fusionar cambios (desde GitHub)
- Crear Pull Request en GitHub.
- Revisar los cambios.
- Hacer merge a main.

---

## 🐂 Estructura del proyecto

```plaintext
.
├── assets/
│   ├── icons/       # Iconos de la app
│   └── images/      # Imágenes estáticas
├── components/      # Componentes reutilizables
│   └── Map/
├── screens/         # Pantallas principales
│   ├── Home/
│   └── Details/
├── utils/           # Funciones helpers
├── .gitignore       # Archivos ignorados
├── App.js           # Punto de entrada
└── package.json     # Dependencias
```

---

## 🛠 Tecnologías principales
- React Native 0.72
- Expo SDK 49
- React Navigation 6.x
- Axios 1.5+
- React Native Maps 1.7
- Postgrees (Bases de Datos Relacionales)

---

## 🐛 Solución de problemas

### Error: SDK no encontrado
```bash
expo upgrade        # Actualizar Expo SDK
rm -rf node_modules # Eliminar dependencias
npm install         # Reinstalar todo
```

### Problemas de caché
```bash
npx expo start --clear    # Limpiar caché
npx react-native clean    # Limpiar proyecto
```

---

## 📝 Licencia
MIT License - Ver LICENSE

---

## 💎 Contacto

### ¿Problemas técnicos?
✉️ soporte@brujulallanera.com

### 🐞 Reportar un error

---

Desarrollado con ❤️ por Christofer Falla - Leymar Urbano - Damian Caro - Steven Balaguera - © 2025 La Brújula Llanera

---

Este README contiene absolutamente **todo lo necesario** para:
1. Configurar el proyecto desde cero
2. Trabajar con Git/GitHub
3. Solucionar errores comunes
4. Entender la arquitectura



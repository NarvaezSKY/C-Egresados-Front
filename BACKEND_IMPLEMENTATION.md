# Implementación del Backend para reCAPTCHA

## 📋 **Cambios necesarios en tu backend (Puerto 4000)**

Tu frontend ahora enviará una petición POST a `/carnet` con la siguiente estructura:

```json
{
  "cedula": "1234567890",
  "ficha": "2345678",
  "recaptchaToken": "03AGdBq25..."
}
```

## 🔧 **Implementación requerida en tu backend:**

### 1. **Cambiar de GET a POST**
```javascript
// Antes (GET): /carnet/:cedula/:ficha
// Ahora (POST): /carnet

app.post('/carnet', async (req, res) => {
  const { cedula, ficha, recaptchaToken } = req.body;
  
  // Tu lógica de verificación aquí
});
```

### 2. **Verificar el token de reCAPTCHA**

#### Con Node.js/Express:
```javascript
const axios = require('axios');

app.post('/carnet', async (req, res) => {
  const { cedula, ficha, recaptchaToken } = req.body;

  // 1. Validar que el token esté presente
  if (!recaptchaToken) {
    return res.status(400).json({
      success: false,
      message: 'Token de reCAPTCHA requerido'
    });
  }

  try {
    // 2. Verificar el token con Google
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: '6Ldl5fArAAAAAJaKTk3QMlnt3If6eNVYugpIQlY0', // Tu secret key
        response: recaptchaToken,
        remoteip: req.ip // Opcional
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const recaptchaResult = recaptchaResponse.data;

    // 3. Verificar si la validación fue exitosa
    if (!recaptchaResult.success) {
      return res.status(400).json({
        success: false,
        message: 'Verificación reCAPTCHA fallida'
      });
    }

    // 4. Procesar la solicitud del carnet (tu lógica existente)
    const carnetBuffer = await generarCarnet(cedula, ficha);

    // 5. Devolver el PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="carnet-${cedula}.pdf"`);
    res.send(carnetBuffer);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});
```

#### Con fetch (alternativa):
```javascript
app.post('/carnet', async (req, res) => {
  const { cedula, ficha, recaptchaToken } = req.body;

  // Verificar reCAPTCHA
  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: '6Ldl5fArAAAAAJaKTk3QMlnt3If6eNVYugpIQlY0',
      response: recaptchaToken,
    }),
  });

  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return res.status(400).json({
      success: false,
      message: 'Verificación reCAPTCHA fallida'
    });
  }

  // Tu lógica existente para generar el carnet...
});
```

## 🚨 **Importante:**

1. **Reemplaza la ruta GET existente** con una ruta POST
2. **Usa tu SECRET_KEY real** (`6Ldl5fArAAAAAJaKTk3QMlnt3If6eNVYugpIQlY0`)
3. **Maneja los errores** de reCAPTCHA apropiadamente
4. **Mantén tu lógica existente** para generar el carnet

## 🧪 **Ejemplo de respuesta de Google reCAPTCHA:**

**Éxito:**
```json
{
  "success": true,
  "challenge_ts": "2023-xx-xxTxx:xx:xxZ",
  "hostname": "localhost"
}
```

**Error:**
```json
{
  "success": false,
  "error-codes": ["invalid-input-response"]
}
```

## 📝 **Códigos de error comunes:**

- `missing-input-secret`: Falta la clave secreta
- `invalid-input-secret`: Clave secreta inválida
- `missing-input-response`: Falta el token de reCAPTCHA
- `invalid-input-response`: Token de reCAPTCHA inválido
- `timeout-or-duplicate`: Token expirado o duplicado

## ✅ **Para probar:**

1. Ve a http://localhost:3001
2. Completa el formulario
3. Resuelve el reCAPTCHA
4. Haz clic en "Descargar Carnet"
5. Verifica que tu backend reciba los datos correctamente

¿Necesitas ayuda implementando esto en tu backend específico?
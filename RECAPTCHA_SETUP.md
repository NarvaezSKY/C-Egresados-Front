# Configuración de Google reCAPTCHA v2

## 1. Obtener las claves de reCAPTCHA

1. Ve a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Haz clic en "Registrar un nuevo sitio"
3. Configura los siguientes datos:
   - **Etiqueta**: Nombre de tu aplicación (ej: "SENA Carnet Egreso")
   - **Tipo de reCAPTCHA**: Selecciona "reCAPTCHA v2" → "Casilla de verificación 'No soy un robot'"
   - **Dominios**: 
     - Para desarrollo: `localhost`
     - Para producción: tu dominio (ej: `miapp.com`)
   - **Aceptar los términos de servicio**

4. Después del registro obtendrás:
   - **Clave del sitio (Site Key)**: Para el frontend
   - **Clave secreta (Secret Key)**: Para el backend

## 2. Configurar las variables de entorno

Actualiza el archivo `.env.local` con tus claves reales:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

**Nota**: Las claves mostradas arriba son claves de prueba que siempre devuelven éxito. Reemplázalas con tus claves reales.

## 3. Cómo usar el token de reCAPTCHA en tu backend

El componente ahora enviará un `recaptchaToken` junto con `cedula` y `ficha`. Este token debe ser verificado en tu backend.

### Ejemplo de verificación en el servidor (Node.js/Express):

```javascript
const express = require('express');
const axios = require('axios');

app.post('/api/carnet', async (req, res) => {
  const { cedula, ficha, recaptchaToken } = req.body;

  // 1. Verificar reCAPTCHA
  if (!recaptchaToken) {
    return res.status(400).json({
      success: false,
      message: 'Token de reCAPTCHA requerido'
    });
  }

  try {
    // 2. Validar el token con Google
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
        remoteip: req.ip // Opcional
      })
    );

    const { success, score, action } = recaptchaResponse.data;

    // 3. Verificar si la validación fue exitosa
    if (!success) {
      return res.status(400).json({
        success: false,
        message: 'Verificación reCAPTCHA fallida'
      });
    }

    // 4. Procesar la solicitud del carnet
    // Aquí va tu lógica existente para generar el carnet
    const carnetData = await generateCarnet(cedula, ficha);

    res.json({
      success: true,
      data: carnetData
    });

  } catch (error) {
    console.error('Error en verificación reCAPTCHA:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});
```

### Ejemplo para Next.js API Routes:

```typescript
// pages/api/carnet.ts o app/api/carnet/route.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { cedula, ficha, recaptchaToken } = req.body;

  // Verificar reCAPTCHA
  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
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

  // Procesar la solicitud del carnet
  // Tu lógica existente aquí...
}
```

## 4. Consideraciones de seguridad

- **Nunca expongas la clave secreta** en el frontend
- La **clave del sitio** (NEXT_PUBLIC_RECAPTCHA_SITE_KEY) es pública y va en el frontend
- La **clave secreta** (RECAPTCHA_SECRET_KEY) debe mantenerse privada en el servidor
- Siempre valida el token en el servidor, nunca confíes solo en el frontend
- Considera implementar rate limiting adicional para prevenir ataques

## 5. Personalización del reCAPTCHA

El componente está configurado con:
- `theme="light"` (también puedes usar "dark")
- Se resetea automáticamente después del envío
- Se maneja la expiración y errores automáticamente

Para personalizar más opciones, puedes modificar las props del componente ReCAPTCHA en `carnet-generator-form.tsx`.

## 6. Testing

Para testing, Google proporciona claves especiales que siempre pasan:

**Site Key de prueba**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
**Secret Key de prueba**: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

Estas claves están diseñadas para testing y siempre devuelven éxito en la verificación.
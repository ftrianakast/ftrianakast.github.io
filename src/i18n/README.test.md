# i18n Unit Tests

## Resumen

Suite completa de tests unitarios para el sistema de internacionalización (i18n) del sitio web personal.

## Cobertura de Tests

### ✅ 30 Tests - Todos Pasando

#### 1. Función `t()` - Traducciones (8 tests)
- ✅ Traducciones simples en español
- ✅ Traducciones simples en inglés
- ✅ Traducciones simples en alemán
- ✅ Traducciones anidadas (2 niveles)
- ✅ Traducciones profundamente anidadas (3+ niveles)
- ✅ Traducciones tipo array (para listas)
- ✅ Manejo de claves inexistentes
- ✅ Manejo de idiomas no soportados

#### 2. Función `getLangFromUrl()` (7 tests)
- ✅ Detecta español en URL raíz (`/`)
- ✅ Detecta inglés en URLs `/en`
- ✅ Detecta inglés en URLs anidadas `/en/about`
- ✅ Detecta alemán en URLs `/de`
- ✅ Detecta alemán en URLs anidadas `/de/work`
- ✅ Retorna idioma por defecto para códigos desconocidos
- ✅ Retorna idioma por defecto para rutas no-idioma

#### 3. Función `getLocalizedPath()` (9 tests)
- ✅ Genera rutas raíz para español (default)
- ✅ Genera rutas de páginas en español
- ✅ Genera ruta raíz para inglés (`/en`)
- ✅ Genera rutas de páginas en inglés (`/en/about`)
- ✅ Genera ruta raíz para alemán (`/de`)
- ✅ Genera rutas de páginas en alemán (`/de/about`)
- ✅ Maneja rutas con trailing slashes

#### 4. Constantes (3 tests)
- ✅ Objeto `languages` contiene los 3 idiomas
- ✅ Nombres correctos de idiomas
- ✅ Constante `defaultLang` es 'es'

#### 5. Tests de Integración (3 tests)
- ✅ Flujo completo para páginas en español
- ✅ Flujo completo para páginas en inglés
- ✅ Flujo completo para páginas en alemán
- ✅ Preservación de idioma al navegar

## Comandos Disponibles

```bash
# Ejecutar tests en modo watch
npm run test

# Ejecutar tests una sola vez
npm run test:run

# Abrir interfaz visual de tests
npm run test:ui
```

## Estructura de Tests

```
src/i18n/
├── utils.ts           # Código fuente
├── utils.test.ts      # Tests unitarios
├── locales/
│   ├── es.json       # Traducciones español
│   ├── en.json       # Traducciones inglés
│   └── de.json       # Traducciones alemán
└── README.test.md    # Esta documentación
```

## Ejemplo de Salida

```
✓ src/i18n/utils.test.ts (30 tests) 3ms

Test Files  1 passed (1)
     Tests  30 passed (30)
  Start at  09:32:28
  Duration  92ms
```

## Casos de Prueba Importantes

### Traducciones Multinivel
```typescript
t('es', 'home.hero.title') // → 'Ingeniero de Software Staff'
t('en', 'home.hero.title') // → 'Staff Software Engineer'
```

### Detección de Idioma por URL
```typescript
getLangFromUrl(new URL('http://localhost/en/about')) // → 'en'
getLangFromUrl(new URL('http://localhost/de/work'))  // → 'de'
getLangFromUrl(new URL('http://localhost/contact'))  // → 'es'
```

### Generación de Rutas Localizadas
```typescript
getLocalizedPath('/about', 'es') // → '/about'
getLocalizedPath('/about', 'en') // → '/en/about'
getLocalizedPath('/about', 'de') // → '/de/about'
```

## Notas

- Los tests cubren el 100% de la funcionalidad crítica de i18n
- Se prueban casos edge (idiomas inexistentes, claves faltantes)
- Todos los tests son independientes y pueden ejecutarse en paralelo
- Los warnings en stderr son esperados (pruebas de manejo de errores)

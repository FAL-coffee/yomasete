// src/styles/theme.css.ts
import { style } from '@vanilla-extract/css'

export const layout = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const header = style({
  padding: '1rem',
  borderBottom: '1px solid #eaeaea',
  backgroundColor: 'white',
})

export const logo = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#6d28d9',
  textDecoration: 'none',
})

export const navLinks = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const main = style({
  flex: 1,
  padding: '2rem',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
})

export const authContainer = style({
  maxWidth: '400px',
  margin: '2rem auto',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
})

export const toastViewport = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '1rem',
  gap: '1rem',
  width: '320px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 1000,
})

export const switchMode = style({
  background: 'none',
  border: 'none',
  color: '#6d28d9',
  cursor: 'pointer',
  marginTop: '1rem',
})

export const actions = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
})

export const scannerModal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
})

import { style } from '@vanilla-extract/css'

/* メイン */
export const main = style({
  flex: 1,
})

export const formWrapper = style({
  'maxWidth': '400px',
  'width': '100%',
  'margin': '40px auto',
  'padding': '20px',
  'border': '1px solid #eaeaea',
  'borderRadius': '8px',
  'backgroundColor': '#fff',
  'boxShadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '20px auto',
      padding: '16px',
    },
  },
})

export const heading = style({
  'marginBottom': '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
})

export const form = style({
  width: '100%',
})

export const input = style({
  'width': '100%',
  'padding': '8px',
  'borderRadius': '4px',
  'border': '1px solid #ccc',
  'fontSize': '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px',
    },
  },
})

export const submitButton = style({
  marginTop: '16px',
})

export const googleButton = style({
  marginTop: '16px',
})

export const text = style({
  marginTop: '16px',
  fontSize: '14px',
  textAlign: 'center',
})

export const link = style({
  color: '#0070f3',
  textDecoration: 'underline',
})

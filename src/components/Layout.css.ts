import { style } from '@vanilla-extract/css'

/* 全体レイアウト */
export const page = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--color-background, #fff)',
})

/* ヘッダー */
export const header = style({
  borderBottom: '1px solid #eaeaea',
  padding: '16px 0',
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--color-background, #fff)',
})

export const headerContainer = style({
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'space-between',
  'maxWidth': '1200px',
  'margin': '0 auto',
  'padding': '0 16px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 8px',
    },
  },
})

/* ロゴ */
export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
  height: '100%',
})

export const logoIcon = style({
  height: '24px',
  width: '24px',
  color: '#000',
})

export const logoText = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#000',
})

/* ナビゲーション */
export const nav = style({
  'display': 'flex',
  'gap': '24px',
  'alignItems': 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none', // 小さい画面では非表示
    },
  },
})

export const navLink = style({
  fontSize: '14px',
  fontWeight: 500,
  textDecoration: 'none',
  color: 'inherit',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

/* 認証ボタン */
export const authButtons = style({
  display: 'flex',
  gap: '16px',
})

/* フッター */
export const footer = style({
  borderTop: '1px solid #eaeaea',
  padding: '24px 0',
})

export const footerContainer = style({
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'space-between',
  'maxWidth': '1200px',
  'margin': '0 auto',
  'padding': '0 16px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 8px',
    },
  },
})

export const footerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const footerIcon = style({
  height: '20px',
  width: '20px',
  color: 'var(--color-primary, #000)',
})

export const footerText = style({
  fontSize: '12px',
  color: 'var(--color-muted-foreground, #666)',
})

export const footerNav = style({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
})

export const footerNavLink = style({
  fontSize: '12px',
  textDecoration: 'none',
  color: 'inherit',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

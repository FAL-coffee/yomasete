import { globalStyle, style } from '@vanilla-extract/css'

/* メイン */
export const main = style({
  flex: 1,
})

export const container = style({
  'maxWidth': '1200px',
  'margin': '0 auto',
  'padding': '0 16px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 8px',
    },
  },
})

/* ヒーローセクション */
export const hero = style({
  padding: '48px 0',
  background: 'linear-gradient(to bottom, var(--color-background, #fff), var(--color-muted, #f7f7f7))',
})

export const heroGrid = style({
  'display': 'grid',
  'gridTemplateColumns': '1fr 1fr',
  'alignItems': 'center',
  'gap': '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
})

export const heroText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const heroTitle = style({
  'fontSize': '32px',
  'fontWeight': 'bold',
  'lineHeight': 1.2,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
})

export const heroDescription = style({
  'maxWidth': '600px',
  'color': 'var(--color-muted-foreground, #666)',
  'fontSize': '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px',
    },
  },
})

export const heroButtons = style({
  display: 'flex',
  gap: '16px',
})

export const heroImageWrapper = style({
  textAlign: 'center',
})

export const heroImage = style({
  'borderRadius': '8px',
  'objectFit': 'cover',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },
})

/* セクション共通 */
export const sectionHeader = style({
  textAlign: 'center',
  marginBottom: '40px',
})

export const badge = style({
  display: 'inline-block',
  backgroundColor: 'var(--color-muted, #f0f0f0)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
})

export const sectionTitle = style({
  'fontSize': '28px',
  'fontWeight': 'bold',
  'margin': '16px 0',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '24px',
    },
  },
})

export const sectionDescription = style({
  'maxWidth': '900px',
  'margin': '0 auto',
  'color': 'var(--color-muted-foreground, #666)',
  'fontSize': '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px',
    },
  },
})

/* 特徴セクション */
export const features = style({
  padding: '48px 0',
})

export const featuresGrid = style({
  'display': 'grid',
  'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))',
  'gap': '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '16px',
    },
  },
})

export const featureCard = style({
  border: '1px solid #eaeaea',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center',
})

export const iconWrapper = style({
  height: '64px',
  width: '64px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-muted, #f0f0f0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px auto',
})

export const featureIcon = style({
  height: '32px',
  width: '32px',
  color: 'var(--color-primary, #000)',
})

export const featureTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '8px',
})

export const featureDescription = style({
  fontSize: '14px',
  color: 'var(--color-muted-foreground, #666)',
})

/* 使い方セクション */
export const howItWorks = style({
  padding: '48px 0',
  backgroundColor: 'var(--color-muted, #f7f7f7)',
})

export const stepsGrid = style({
  'display': 'grid',
  'gridTemplateColumns': 'repeat(3, 1fr)',
  'gap': '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
})

export const stepCard = style({
  textAlign: 'center',
})

export const stepIcon = style({
  height: '48px',
  width: '48px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-primary, #000)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  margin: '0 auto 16px auto',
})

export const stepTitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '8px',
})

export const stepDescription = style({
  fontSize: '14px',
  color: 'var(--color-muted-foreground, #666)',
})

/* 料金プランセクション */
export const pricing = style({
  padding: '48px 0',
})

export const pricingGrid = style({
  'display': 'grid',
  'gridTemplateColumns': 'repeat(3, 1fr)',
  'gap': '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
})

export const pricingCard = style({
  border: '1px solid #eaeaea',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center',
})

export const pricingCardHighlighted = style([
  pricingCard,
  {
    borderColor: 'var(--color-primary, #000)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
])

export const pricingTitle = style({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '8px',
})

export const pricingSubtitle = style({
  fontSize: '14px',
  color: 'var(--color-muted-foreground, #666)',
  marginBottom: '16px',
})

export const pricingPrice = style({
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '16px',
})

export const priceUnit = style({
  fontSize: '16px',
  color: 'var(--color-muted-foreground, #666)',
  marginLeft: '4px',
})

export const pricingList = style({
  listStyle: 'none',
  padding: 0,
  marginBottom: '16px',
  fontSize: '14px',
  color: 'var(--color-muted-foreground, #666)',
})

globalStyle(`${pricingList} li:not(:last-child)`, {
  marginBottom: '8px',
})

export const pricingButton = style({
  width: '100%',
})

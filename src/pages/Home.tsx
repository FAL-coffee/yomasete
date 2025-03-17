import { Button } from '@radix-ui/themes'
import { Shield, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

import * as styles from './Home.css.ts'

export const Home = () => {
  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                コミュニティ内で
                <br />
                安全に本を共有
              </h1>
              <p className={styles.heroDescription}>
                Yomaseteは、プライバシーを守りながらコミュニティ内で書籍を貸し借りできるサービスです。バーコードスキャンで簡単登録、匿名配送で安心取引。
              </p>
              <div className={styles.heroButtons}>
                <Link to='/signup'>
                  <Button size='4'>無料で始める</Button>
                </Link>
                <Link to='#how-it-works'>
                  <Button size='4' variant='outline'>
                    詳しく見る
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <img
                alt='Yomaseteアプリのイメージ'
                className={styles.heroImage}
                height={300}
                src='/src/assets/app-sample-image.png'
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className={styles.features} id='features'>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>主な特徴</div>
            <h2 className={styles.sectionTitle}>安全で使いやすい書籍共有</h2>
            <p className={styles.sectionDescription}>
              Yomaseteは、コミュニティ内での知識共有を促進するために設計された、使いやすく安全なプラットフォームです。
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Shield className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>プライバシー保護</h3>
              <p className={styles.featureDescription}>
                ヤマト運輸の匿名配送サービスと完全連携し、個人情報を守りながら安心して取引できます。
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Users className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>コミュニティ最適化</h3>
              <p className={styles.featureDescription}>
                最大5人までの無料プラン提供。コミュニティサイズに応じた柔軟な拡張が可能です。
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <TrendingUp className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>シンプルな利用体験</h3>
              <p className={styles.featureDescription}>
                バーコードスキャンによる簡単登録。モバイルファーストのUI設計で、どこからでも簡単にアクセス。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section className={styles.howItWorks} id='how-it-works'>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>使い方</h2>
            <p className={styles.sectionDescription}>
              Yomaseteでの書籍共有は、簡単3ステップで始められます。
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>1</div>
              <h3 className={styles.stepTitle}>コミュニティに参加</h3>
              <p className={styles.stepDescription}>
                既存のコミュニティに参加するか、新しいコミュニティを作成します。
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>2</div>
              <h3 className={styles.stepTitle}>書籍を登録</h3>
              <p className={styles.stepDescription}>
                バーコードをスキャンするか、手動で書籍情報を入力して登録します。
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>3</div>
              <h3 className={styles.stepTitle}>貸し借りを開始</h3>
              <p className={styles.stepDescription}>
                コミュニティ内で本を借りたり、貸したりすることができます。匿名配送で安心です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className={styles.pricing} id='pricing'>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>料金プラン</h2>
            <p className={styles.sectionDescription}>
              コミュニティのサイズに合わせて選べる、シンプルな料金体系です。
            </p>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>スタータープラン</h3>
              <p className={styles.pricingSubtitle}>小さなコミュニティに最適</p>
              <div className={styles.pricingPrice}>無料</div>
              <ul className={styles.pricingList}>
                <li>最大5人までのコミュニティ</li>
                <li>月間10冊までの貸し借り</li>
                <li>基本的な書籍管理機能</li>
              </ul>
              <Button className={styles.pricingButton}>無料で始める</Button>
            </div>
            <div className={styles.pricingCardHighlighted}>
              <h3 className={styles.pricingTitle}>スタンダードプラン</h3>
              <p className={styles.pricingSubtitle}>中規模コミュニティに最適</p>
              <div className={styles.pricingPrice}>
                <span>¥980</span>
                <span className={styles.priceUnit}>/月</span>
              </div>
              <ul className={styles.pricingList}>
                <li>最大20人までのコミュニティ</li>
                <li>無制限の貸し借り</li>
                <li>高度な書籍管理機能</li>
                <li>優先サポート</li>
              </ul>
              <Button className={styles.pricingButton}>今すぐ始める</Button>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>プロフェッショナルプラン</h3>
              <p className={styles.pricingSubtitle}>大規模コミュニティに最適</p>
              <div className={styles.pricingPrice}>
                <span>¥2,980</span>
                <span className={styles.priceUnit}>/月</span>
              </div>
              <ul className={styles.pricingList}>
                <li>無制限のコミュニティメンバー</li>
                <li>無制限の貸し借り</li>
                <li>高度な分析ダッシュボード</li>
                <li>専任サポート担当者</li>
              </ul>
              <Button className={styles.pricingButton} variant='outline'>
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

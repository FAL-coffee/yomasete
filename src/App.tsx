import '@radix-ui/themes/styles.css'
import './styles/reset.css'
import './styles/app.css'

import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

// import { supabase } from './config/supabase'
import { router } from './routes'

const queryClient = new QueryClient()

// supabase.auth.onAuthStateChange(async (event, session) => {
//   if (event === 'SIGNED_IN' && session?.user) {
//     const user = session.user
//     // ユーザーが既に登録済みかどうかチェックするロジックを追加
//     const { data: existingUser, error: fetchError } = await supabase
//       .from('users')
//       .select('id')
//       .eq('id', user.id)
//       .maybeSingle()

//     if (fetchError && fetchError.code !== 'PGRST116') {
//       console.error('Error fetching user:', fetchError)
//       return
//     }

//     if (fetchError) {
//       console.error('Error fetching user:', fetchError)
//       return
//     }

//     if (existingUser) {
//       console.log('User already registered:', existingUser)
//       return
//     }

//     const { error: insertError } = await supabase.from('users').insert({
//       id: user.id,
//       email: user.email,
//       name: user.user_metadata?.full_name || '',
//       profile_image: user.user_metadata?.avatar_url || '',
//       created_at: user.created_at,
//       updated_at: user.created_at,
//     })
//     if (insertError) {
//       console.error('Error inserting user:', insertError)
//     }
//   }
// })

export const App = () => {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Theme>
  )
}

export default App

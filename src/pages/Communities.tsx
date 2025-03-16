import { Button, Dialog, TextField } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

import { CommunityCard } from '../components/CommunityCard'
import { supabase } from '../config/supabase'
import { useAuth } from '../hooks/useAuth'
import * as styles from '../styles/theme.css'
import { Community } from '../types'

export const Communities = () => {
  const { user } = useAuth()
  const [communities, setCommunities] = useState<Community[]>([])
  const [memberCounts, setMemberCounts] = useState<Record<string, number>>({})
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newCommunityName, setNewCommunityName] = useState('')
  const [newCommunityDescription, setNewCommunityDescription] = useState('')

  useEffect(() => {
    fetchCommunities()
  }, [])

  const fetchCommunities = async () => {
    try {
      const { data, error } = await supabase
        .from('communities')
        .select('*')

      if (error) throw error

      const communities = data as Community[]
      setCommunities(communities)

      // Fetch member counts for each community
      const counts: Record<string, number> = {}
      for (const community of communities) {
        const { count } = await supabase
          .from('community_members')
          .select('*', { count: 'exact' })
          .eq('community_id', community.id)

        counts[community.id] = count || 0
      }
      setMemberCounts(counts)
    }
    catch (error) {
      console.error('Error fetching communities:', error)
    }
  }

  const handleCreateCommunity = async () => {
    try {
      const { data, error } = await supabase
        .from('communities')
        .insert({
          name: newCommunityName,
          description: newCommunityDescription,
          created_by: user?.id,
          max_members: 5, // Free plan limit
        })
        .select()
        .single()

      if (error) throw error

      setCommunities([...communities, data as Community])
      setIsCreateDialogOpen(false)
      setNewCommunityName('')
      setNewCommunityDescription('')
    }
    catch (error) {
      console.error('Error creating community:', error)
    }
  }

  const handleJoinCommunity = async (communityId: string) => {
    try {
      const { error } = await supabase
        .from('community_members')
        .insert({
          community_id: communityId,
          user_id: user?.id,
        })

      if (error) throw error

      // Update member count
      setMemberCounts({
        ...memberCounts,
        [communityId]: (memberCounts[communityId] || 0) + 1,
      })
    }
    catch (error) {
      console.error('Error joining community:', error)
    }
  }

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h1>Communities</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          Create Community
        </Button>
      </div>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {communities.map(community => (
          <CommunityCard
            community={community}
            key={community.id}
            memberCount={memberCounts[community.id] || 0}
            onJoin={() => handleJoinCommunity(community.id)}
          />
        ))}
      </div>

      <Dialog.Root onOpenChange={setIsCreateDialogOpen} open={isCreateDialogOpen}>
        <Dialog.Content>
          <Dialog.Title>Create Community</Dialog.Title>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleCreateCommunity()
          }}
          >
            <TextField.Root
              required
              onChange={e => setNewCommunityName(e.target.value)}
              placeholder='Community Name'
              value={newCommunityName}
            />
            <TextField.Root
              required
              onChange={e => setNewCommunityDescription(e.target.value)}
              placeholder='Description'
              value={newCommunityDescription}
            />
            <Button type='submit'>Create</Button>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

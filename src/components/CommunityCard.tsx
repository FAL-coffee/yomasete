// src/components/CommunityCard.tsx
import React from 'react'
import { Card, Text, Button } from '@radix-ui/themes'
import { Community } from '../types'

interface CommunityCardProps {
  community: Community
  onJoin?: () => void
  isMember?: boolean
  memberCount: number
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  community,
  onJoin,
  isMember,
  memberCount
}) => {
  return (
    <Card style={{ maxWidth: '400px' }}>
      <div style={{ padding: '1rem' }}>
        <Text size="3" weight="bold">
          {community.name}
        </Text>
        <Text as="p" size="2" color="gray">
          {community.description}
        </Text>
        <Text as="p" size="2" style={{ marginTop: '0.5rem' }}>
          メンバー: {memberCount} / {community.max_members}
        </Text>
        
        {!isMember && onJoin && memberCount < community.max_members && (
          <Button onClick={onJoin} style={{ marginTop: '1rem' }}>
            参加する
          </Button>
        )}
        
        {isMember && (
          <Text size="2" color="blue" style={{ marginTop: '1rem' }}>
            参加中
          </Text>
        )}
      </div>
    </Card>
  )
}
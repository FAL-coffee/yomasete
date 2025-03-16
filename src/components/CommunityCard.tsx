import { Button, Card, Text } from '@radix-ui/themes'

import { Community } from '../types'

interface CommunityCardProps {
  community: Community
  onJoin?: () => void
  isMember?: boolean
  memberCount: number
}

export const CommunityCard = ({
  community,
  onJoin,
  isMember,
  memberCount,
}: CommunityCardProps) => {
  return (
    <Card style={{ maxWidth: '400px' }}>
      <div style={{ padding: '1rem' }}>
        <Text size='3' weight='bold'>
          {community.name}
        </Text>
        <Text as='p' color='gray' size='2'>
          {community.description}
        </Text>
        <Text as='p' size='2' style={{ marginTop: '0.5rem' }}>
          メンバー:
          {' '}
          {memberCount}
          {' '}
          /
          {' '}
          {community.max_members}
        </Text>

        {!isMember && onJoin && memberCount < community.max_members && (
          <Button onClick={onJoin} style={{ marginTop: '1rem' }}>
            参加する
          </Button>
        )}

        {isMember && (
          <Text color='blue' size='2' style={{ marginTop: '1rem' }}>
            参加中
          </Text>
        )}
      </div>
    </Card>
  )
}

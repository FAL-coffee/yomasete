# Yomasete System Design Document

## Implementation approach

### Technology Stack
- Frontend: React, TypeScript, ReactRouter v7, radix-ui, vanilla-extract
- Backend: Supabase (BaaS)
- Authentication: Supabase Auth
- Database: PostgreSQL (via Supabase)
- Storage: Supabase Storage
- APIs: Supabase REST/Realtime APIs, Yamato Shipping API, Google Books API

### Key Design Decisions
1. **Serverless Architecture**
   - Utilize Supabase's serverless functions for business logic
   - Leverage Supabase's realtime subscriptions for live updates
   - Use edge functions for third-party API integration

2. **Security First Approach**
   - Implement Row Level Security (RLS) policies for data access control
   - JWT-based authentication
   - Encrypted data transmission
   - Secure webhook endpoints for shipping status updates

3. **Scalable Design**
   - Horizontally scalable architecture using Supabase
   - Efficient data caching strategy
   - Optimized database queries with proper indexing

4. **Integration Strategy**
   - Microservices architecture for shipping integration
   - Webhook-based status updates from Yamato API
   - Batch processing for notifications and reminders

### Critical Features Implementation

1. **Book Registration Flow**
   - Barcode scanning using device camera
   - ISBN lookup via Google Books API
   - Image optimization and storage in Supabase

2. **Lending Process**
   - State machine based lending workflow
   - Realtime notifications using Supabase subscriptions
   - Automated shipping label generation

3. **Community Management**
   - Hierarchical access control
   - Member limit enforcement
   - Activity monitoring and analytics

## Anything UNCLEAR

1. **Shipping Integration Details**
   - Need specific API documentation from Yamato
   - Clarification on shipping label format requirements
   - Error handling procedures for failed deliveries

2. **Payment Processing**
   - Payment gateway selection for premium plans
   - Handling failed payments and plan downgrades

3. **Data Retention Policy**
   - Duration for keeping transaction history
   - Policy for handling user data after account deletion
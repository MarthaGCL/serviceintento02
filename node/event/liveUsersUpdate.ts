import { Clients } from '../clients/index';
import { EventContext } from '@vtex/api';

//node/event/liveUsersUpdate.ts

export async function updateLiveUsers(ctx: EventContext<Clients>) {
    const liveUsersProduct = await ctx.clients.analytics.getLiveUsers()
    console.log('LIVE USERS:', liveUsersProduct)
    return true
  }
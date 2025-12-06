'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function ECommerceAgent() {
    const data = industryData['e-commerce']

    return <VoiceAgentLanding data={data} />
}

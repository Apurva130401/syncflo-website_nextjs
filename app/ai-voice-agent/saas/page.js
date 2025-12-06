'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function SaasAgent() {
    const data = industryData['saas']

    return <VoiceAgentLanding data={data} />
}

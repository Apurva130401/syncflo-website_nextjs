'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function BPOAgent() {
    const data = industryData['bpo']

    return <VoiceAgentLanding data={data} />
}

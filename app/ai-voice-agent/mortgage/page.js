'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function MortgageAgent() {
    const data = industryData['mortgage']

    return <VoiceAgentLanding data={data} />
}

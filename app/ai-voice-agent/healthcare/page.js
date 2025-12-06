'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function HealthcareAgent() {
    const data = industryData['healthcare']

    return <VoiceAgentLanding data={data} />
}

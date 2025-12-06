'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function InsuranceAgent() {
    const data = industryData['insurance']

    return <VoiceAgentLanding data={data} />
}

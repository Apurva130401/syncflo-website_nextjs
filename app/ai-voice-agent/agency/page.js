'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function AgencyAgent() {
    const data = industryData['agency']

    return <VoiceAgentLanding data={data} />
}

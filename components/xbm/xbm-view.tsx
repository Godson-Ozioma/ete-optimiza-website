"use client";

import { MotionConfig } from "motion/react";

import { XbmDashboardSection } from "@/components/xbm/dashboard-section";
import { XbmDrawdownSection } from "@/components/xbm/drawdown-section";
import { XbmEnvelopeSection } from "@/components/xbm/envelope-section";
import { XbmFluxSection } from "@/components/xbm/flux-section";
import { XbmHero } from "@/components/xbm/hero";
import { XbmModuleNav } from "@/components/xbm/module-nav";
import { XbmPilotSection } from "@/components/xbm/pilot-section";
import { XbmPtaSection } from "@/components/xbm/pta-section";
import { XbmSkinSection } from "@/components/xbm/skin-section";
import { XbmTemperatureSection } from "@/components/xbm/temperature-section";
import { XbmWellDataSection } from "@/components/xbm/well-data-section";

export function XbmView() {
  return (
    <MotionConfig reducedMotion="user">
      <XbmHero />
      <XbmModuleNav />
      <XbmDashboardSection />
      <XbmWellDataSection />
      <XbmEnvelopeSection />
      <XbmTemperatureSection />
      <XbmDrawdownSection />
      <XbmFluxSection />
      <XbmPtaSection />
      <XbmSkinSection />
      <XbmPilotSection />
    </MotionConfig>
  );
}

import type { ComponentType } from "react";
import { lazy } from "react";

interface SceneCoverProps {
   tint: string;
   variant?: string;
}

type SceneComponent = ComponentType<SceneCoverProps>;

// Animated SVG scenes -- lazy so the Projects chunk stays lean; they only
// load when the section renders.
const InfraScene = lazy(() => import("./InfraScene"));
const MlScene = lazy(() => import("./MlScene"));
const GraphScene = lazy(() => import("./GraphScene"));
const AutomationScene = lazy(() => import("./AutomationScene"));
const GateScene = lazy(() => import("./GateScene"));
const GovernanceScene = lazy(() => import("./GovernanceScene"));
const DiagramScene = lazy(() => import("./DiagramScene"));
const ForgeScene = lazy(() => import("./ForgeScene"));
const BrainScene = lazy(() => import("./BrainScene"));
const LedgerScene = lazy(() => import("./LedgerScene"));
const PortfolioScene = lazy(() => import("./PortfolioScene"));

type ProjectCover = {
   kind: "scene";
   Scene: SceneComponent;
   variant?: string;
};

/**
 * Cover per project id (ids from data/projects.json).
 * Every project gets an animated scene of its real mechanism.
 */
const COVER_BY_ID: Record<number, ProjectCover> = {
   // Featured: Security & Cloud Flagships
   1: { kind: "scene", Scene: MlScene }, // AI Threat Detection Engine
   2: { kind: "scene", Scene: AutomationScene }, // SOC Automation Lab (Wazuh, Shuffle, TheHive)
   3: { kind: "scene", Scene: GovernanceScene }, // Security Incident Response Automation on AWS
   4: { kind: "scene", Scene: InfraScene }, // Advanced Blue-Green Deployments with CodeDeploy
   5: { kind: "scene", Scene: GraphScene }, // TOR-UNVEIL: Network Forensics & Deanonymization
   6: { kind: "scene", Scene: GateScene }, // Enterprise Secure Company Network Architecture

   // Community: Autonomous Agents & Research Blog
   7: { kind: "scene", Scene: BrainScene }, // Hermes Agent Expert Knowledge Skill
   8: { kind: "scene", Scene: ForgeScene }, // Hermes Agent Skill Forge & Playbooks
   9: { kind: "scene", Scene: PortfolioScene }, // Cybersecurity Research Blog & Digital Garden

   // Others: Cloud Infrastructure & Database Modernization
   10: { kind: "scene", Scene: DiagramScene }, // Serverless Data Lake Architecture on AWS
   11: { kind: "scene", Scene: LedgerScene }, // Oracle to PostgreSQL Heterogeneous Migration
};

export const getProjectCover = (id: number): ProjectCover | undefined =>
   COVER_BY_ID[id];

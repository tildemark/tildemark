# PROPOSAL: INTEGRATED SURVEILLANCE & NETWORK INFRASTRUCTURE
Project: Casolocan Residence (Model Home Specification)  
Location: Cagayan de Oro City  
Date: January 1, 2026  
Prepared For: Mr. Oliver Casolocan  

## 1. EXECUTIVE SUMMARY
This proposal outlines a premium "Hybrid" security and connectivity solution designed for a modern 2-storey residence. The system prioritizes architectural integration, adapting to the building's High Ceiling and Open Air structural profiles.
The scope includes 10 High-Definition Cameras, 30-Day Recording Retention, and a "Stealth" Wi-Fi 6 Network. Camera locations have been adjusted to account for interior design elements, specifically Motorized Curtain pockets in the Living Area, ensuring zero visual obstruction.

## 2. LOCATION STRATEGY (PLACEMENT PLAN)
To accommodate high ceilings and curtain/blind clearance, indoor cameras are positioned on internal structural walls rather than window corners.

A. Ground Floor Configuration  
**Surveillance (Cameras)**
 * Cam 01 (Outdoor): Carport Column/Wall. Mount: Wall (Bullet). Installed on the front column or perimeter wall facing the gate (open structure).
 * Cam 02 (Outdoor): Terrace Side. Mount: Wall (Bullet). Monitors the side perimeter.
 * Cam 03 (Outdoor): Service Area. Mount: Wall (Bullet). High-mount on the rear external wall.
 * Cam 04 (Indoor): Living Area. Mount: Wall (Dome + Bracket). Relocated: Mounted on the Staircase/Dining transition wall, facing towards the Main Door and TV area. This avoids the motorized curtain stack at the window corner and prevents backlight glare.
 * Cam 05 (Indoor): Dining Area. Mount: Wall (Dome + Bracket). Wall-mounted facing the kitchen island.
 * Cam 06 (Indoor): GF Hallway. Mount: Ceiling/Wall. Monitors the Powder Room access.
**Connectivity (Access Points)**
 * AP 01 (Entrance): Main Door Wall. Model: In-Wall Plate. Installed at switch-height (1.4m). This bypasses the high ceiling entirely to serve the Living Area effectively.
 * AP 02 (Terrace): Open Living Wall. Model: Outdoor Omni. Wall-mounted unit to cover the Carport and Terrace.

B. Second Floor Configuration  
Surveillance (Cameras)  
 * Cam 07 (Outdoor): Balcony. Mount: Wall (Bullet). High-angle view of the street.
 * Cam 08 (Indoor): Top of Stairs. Mount: Wall (Dome + Bracket). Mounted on the upper wall of the stairwell void.
 * Cam 09 (Indoor): Master's Hall. Mount: Ceiling/Wall. Monitors Master Suite entrance.
 * Cam 10 (Indoor): Bedroom 1 Hall. Mount: Ceiling/Wall. Monitors Bedroom 1/Common T&B.
**Connectivity (Access Points)**
 * AP 03 (Stairwell): Stairwell Wall. Model: Ceiling/Wall AP. Mounted vertically on the high wall above the stairs. This utilizes the void to broadcast signal to both floors.
 * AP 04 (Master): Master Bedroom Wall. Model: In-Wall Plate. Installed behind the TV or bedside.

## 3. SYSTEM ARCHITECTURE
A. Surveillance Grid (10 Cameras)  
 * Indoor Areas: Hardwired via PoE. "Dome" cameras in high-ceiling zones are paired with Architectural L-Brackets to ensure proper viewing angles.
 * Outdoor Perimeter: Wireless "Bullet" cameras wall-mounted on the building shell to avoid conduit runs on the facade.
B. Monitoring Station  
 * Dual View: Video feeds are accessible in the Camera Control Room and simultaneously mirrored to the Master Bedroom TV via a hidden HDMI-over-Ethernet link.
## 4. BILL OF MATERIALS (HARDWARE)
A. Core Recording & Storage  

| Component | Specification | Qty | Function |
|---|---|---|---|
| NVR | Dahua NVR4216-16P-4KS2/L | 1 | 16-Channel, 2-Bay, PoE Recorder. |
| Storage | WD Purple HDD (6TB) | 2 | 12TB Total. 30-Day Retention. |

B. Camera Endpoints

| Component | Specification | Qty | Function |
|---|---|---|---|
| Indoor Cam | Dahua IPC-HDW2431T-AS-S2 | 6 | 4MP PoE Dome. |
| Outdoor Cam | Dahua IPC-HFW1430DS-SAW | 4 | 4MP Wi-Fi Bullet. |
| Wall Brackets | Dahua PFB203W | 3 | Required for High Ceilings. Allows proper wall-mounting for Living, Dining, and Stairs Domes. |

C. Network Infrastructure

| Component | Specification | Qty | Placement |
|---|---|---|---|
| High Wall AP | Ruijie RG-RAP2260(G) | 1 | Stairwell Wall. High-power Wi-Fi 6. |
| Wall Plate AP | Ruijie RG-RAP1200(F) | 2 | Entrance & Master Bed. "Stealth" In-Wall units. |
| Outdoor AP | Ruijie RG-RAP6260(G) | 1 | Terrace Wall. Weatherproof. |
| PoE Switch | Ruijie RG-ES209GC-P | 1 | 9-Port Gigabit PoE Switch. |

D. Monitoring & Organization

| Component | Specification | Qty | Function |
|---|---|---|---|
| Data Cabinet | 6U Wall-Mount Enclosure | 1 | Centralizes equipment. |
| Displays | 24" IPS LED Monitor | 2 | Dual-station viewing. |
| HDMI Extender | HDMI over CAT6 Kit | 1 | For Master Bedroom TV feed. |
| HDMI Splitter | 1-in-2-out Powered | 1 | Signal duplication. |

## 5. TOOLS & CONSUMABLES LIST
A. Consumables (Materials)  

| Item | Description | Qty | Usage |
|---|---|---|---|
| CAT6 Cable | Pure Copper UTP (305m Box) | 1 | Main cabling. |
| RJ45 Heads | Pass-through Connectors | 100 | Termination. |
| Utility Boxes | Deep Type (Amco/Generic) | 2 | Required for In-Wall APs. |
| Junction Boxes | Dahua PFA130-E | 4 | Outdoor waterproofing. |
| Cable Ties | 8" UV Resistant (Black) | 1 Pack | Outdoor securing. |
| Velcro Straps | Soft Cable Wrap | 1 Roll | Cabinet management. |
| Conduits | PVC Pipe / Adhesive Molding | 30 | Surface concealment. |

B. Required Tools  
 * Crimping Tool (RJ45 Ratchet)
 * LAN Tester
 * Fish Tape (For pulling wires in walls)
 * Spirit Level (Critical for alignment)
 * Impact Drill (Masonry bits)

## 6. INSTALLATION PROTOCOLS
 * Obstruction Check (Living Area): Cam 04 must be mounted on the Staircase Side Wall, not the Window/TV Corner. This ensures the view is not blocked when the motorized curtains are in the "Open/Stacked" position.
 * Mounting Heights: In High Ceiling areas (Living/Dining), cameras must be wall-mounted at 2.8m to 3.0m.
 * L-Brackets: Indoor Domes in the Living, Dining, and Stairwell areas must use the PFB203W Brackets.
 * Weatherproofing: All outdoor connections must be enclosed in junction boxes.

## 7. SYSTEM TOPOLOGY
 * Internet Source: ISP Modem -> Ruijie PoE Switch (Inside Cabinet).
 * Wireless Distribution: Switch powers the 4 Access Points.
 * Surveillance Inputs:
   * Indoor: Wired directly to NVR.
   * Outdoor: Wireless connection to Access Points.
 * Video Output:
   * NVR HDMI -> Splitter.
   * Path A: Splitter -> Camera Room Monitor.
   * Path B: Splitter -> HDMI Extender -> CAT6 In-Wall -> Master Bedroom Monitor.

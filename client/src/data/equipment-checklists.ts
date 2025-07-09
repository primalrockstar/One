// @ts-nocheck
// To be fixed
export const equipmentChecklists = {
  "Airway & Breathing": {
    BLS: [
      { item: "Portable suction unit", checked: false },
      { item: "Suction catheters (various sizes)", checked: false },
      { item: "Oropharyngeal airways (OPA kit)", checked: false },
      { item: "Nasopharyngeal airways (NPA kit)", checked: false },
      { item: "Bag-valve-mask (BVM) - Adult & Pedi", checked: false },
      { item: "Non-rebreather masks - Adult & Pedi", checked: false },
      { item: "Nasal cannulas - Adult & Pedi", checked: false },
      { item: "Portable oxygen cylinder (D tank)", checked: false },
      { item: "Oxygen regulator", checked: false },
    ],
    ALS: [
      { item: "Laryngoscope handle and blades (Mac/Miller)", checked: false },
      { item: "Endotracheal tubes (ETT, various sizes)", checked: false },
      { item: "Stylets", checked: false },
      { item: "10ml syringe for cuff inflation", checked: false },
      { item: "ETCO2 detector (colorimetric or digital)", checked: false },
      { item: "Supraglottic airway device (e.g., King LT, i-Gel)", checked: false },
      { item: "Cricothyrotomy kit", checked: false },
      { item: "Chest decompression needles", checked: false },
    ],
  },
  "Circulation & Cardiac": {
    BLS: [
      { item: "Automated External Defibrillator (AED)", checked: false },
      { item: "Spare AED pads", checked: false },
      { item: "Sphygmomanometer (BP cuff) - Adult & Pedi", checked: false },
      { item: "Stethoscope", checked: false },
      { item: "Aspirin (81mg or 324mg)", checked: false },
      { item: "Oral glucose", checked: false },
    ],
    ALS: [
      { item: "Cardiac monitor/defibrillator (e.g., LP15, Zoll X)", checked: false },
      { item: "ECG electrodes", checked: false },
      { item: "IV start kits", checked: false },
      { item: "IV catheters (various gauges)", checked: false },
      { item: "Saline/solution bags (e.g., NS, LR)", checked: false },
      { item: "IV tubing (macro/micro drip)", checked: false },
      { item: "Intraosseous (IO) drill and needles", checked: false },
      { item: "Pressure bag", checked: false },
    ],
  },
  "Trauma & Bleeding Control": {
    BLS: [
      { item: "Trauma shears", checked: false },
      { item: "Gauze rolls and pads (various sizes)", checked: false },
      { item: "Abdominal (ABD) pads", checked: false },
      { item: "Elastic bandages (e.g., ACE wrap)", checked: false },
      { item: "Triangular bandages/slings", checked: false },
      { item: "Adhesive tape", checked: false },
      { item: "Tourniquets (e.g., CAT, SOFTT-W)", checked: false },
      { item: "Hemostatic gauze (e.g., QuikClot)", checked: false },
      { item: "Occlusive chest seals", checked: false },
    ],
    ALS: [
        // Most trauma care is BLS, ALS may assist with fluid resuscitation
        { item: "Pelvic binder", checked: false },
    ],
  },
  "Splinting & Immobilization": {
    BLS: [
      { item: "Cervical collars (various sizes)", checked: false },
      { item: "Long spine board or scoop stretcher", checked: false },
      { item: "Head immobilizer blocks/straps", checked: false },
      { item: "Traction splint (e.g., Sager, Hare)", checked: false },
      { item: "SAM splints or padded board splints", checked: false },
      { item: "KED (Kendrick Extrication Device)", checked: false },
    ],
    ALS: [],
  },
  "Medications (Common)": {
    BLS: [
      { item: "Epinephrine Auto-Injectors (EpiPen)", checked: false },
      { item: "Naloxone (Narcan) - nasal spray or vial", checked: false },
      { item: "Albuterol (Nebulizer solution)", checked: false },
    ],
    ALS: [
      { item: "Primary Drug Kit (ensure all vials/pre-fills are present and in-date)", checked: false },
      { item: "Secondary/Backup Drug Kit", checked: false },
      { item: "Dextrose (D50, D10)", checked: false },
      { item: "Amiodarone", checked: false },
      { item: "Lidocaine", checked: false },
      { item: "Atropine", checked: false },
      { item: "Adenosine", checked: false },
      { item: "Fentanyl/Morphine", checked: false },
      { item: "Versed/Midazolam", checked: false },
    ],
  },
  "Patient Assessment & General": {
    BLS: [
      { item: "Gloves (non-latex)", checked: false },
      { item: "Goggles/eye protection", checked: false },
      { item: "N95 masks", checked: false },
      { item: "Penlight", checked: false },
      { item: "Pulse oximeter", checked: false },
      { item: "Thermometer", checked: false },
      { item: "Obstetrical (OB) kit", checked: false },
      { item: "Burn sheets/dressings", checked: false },
      { item: "Emergency blankets", checked: false },
      { item: "Emesis bags", checked: false },
      { item: "Sharps container", checked: false },
    ],
    ALS: [
      { item: "Glucometer with test strips", checked: false },
    ],
  },
  "Pediatric Specific": {
    BLS: [
      { item: "Pediatric BVM and masks", checked: false },
      { item: "Pediatric non-rebreather/nasal cannula", checked: false },
      { item: "Pediatric BP cuffs", checked: false },
    ],
    ALS: [
      { item: "Pediatric drug reference (e.g., Broselow/Handtevy tape)", checked: false },
      { item: "Pediatric IO needles", checked: false },
      { item: "Pediatric ETTs and blades", checked: false },
      { item: "Broselow/Pedi-specific drug kit", checked: false },
      { item: "Umbilical clamp/tape (in OB kit)", checked: false },
    ],
  },
  "Vehicle & Operations": {
    BLS: [ // This is a combined checklist
      { item: "Stretcher (Pryor/Ferno)", checked: false },
      { item: "Stair chair", checked: false },
      { item: "Portable radio", checked: false },
      { item: "Charged flashlight/headlamp", checked: false },
      { item: "Triage tags", checked: false },
      { item: "Road safety vest/cones", checked: false },
      { item: "Fire extinguisher", checked: false },
    ],
    ALS: [],
  },
};

export type EquipmentCategory = keyof typeof equipmentChecklists;
export type EquipmentItem = { item: string; checked: boolean };
export type CertificationLevel = "BLS" | "ALS";

import { 
  Dna, 
  Beaker, 
  Microscope, 
  Activity, 
  ShieldAlert, 
  Database,
  FileText,
  Download,
  Stethoscope,
  Info
} from 'lucide-react';

export const LAB_SERVICES = [
  {
    id: 'hematology',
    name: 'Hematology',
    description: 'Comprehensive blood component analysis including CBC, blood films, and coagulation studies.',
    category: 'Diagnostic',
    icon: 'Activity'
  },
  {
    id: 'biochemistry',
    name: 'Clinical Biochemistry',
    description: 'Specialized analysis of body fluids for metabolic, hormonal, and toxicological indicators.',
    category: 'Diagnostic',
    icon: 'Beaker'
  },
  {
    id: 'microbiology',
    name: 'Microbiology',
    description: 'Expert identification of bacterial, viral, and fungal pathogens with sensitivity testing.',
    category: 'Infectious Disease',
    icon: 'Microscope'
  },
  {
    id: 'histopathology',
    name: 'Histopathology',
    description: 'Advanced tissue examination and biopsy analysis for precise cancer and disease diagnosis.',
    category: 'Cellular Pathology',
    icon: 'Info'
  },
  {
    id: 'molecular',
    name: 'Molecular Diagnostics',
    description: 'State-of-the-art DNA and RNA testing for genetic conditions and viral load monitoring.',
    category: 'Genetics',
    icon: 'Dna'
  },
  {
    id: 'immunology',
    name: 'Immunology',
    description: 'Specialized testing for allergy, autoimmune disorders, and immune system function.',
    category: 'Diagnostic',
    icon: 'ShieldAlert'
  }
];

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    sections: ['Our Story', 'Vision & Mission', 'Accreditations', 'Quality Policy']
  },
  { 
    name: 'Services', 
    path: '/services',
    departments: ['Hematology', 'Biochemistry', 'Microbiology', 'Histopathology']
  },
  { name: 'Clinician', path: '/clinician' },
  { name: 'Contact', path: '/contact' }
];

export const ACCREDITATIONS = [
  { name: 'ISO 15189', description: 'Medical laboratories — Requirements for quality and competence' },
  { name: 'CAP Accredited', description: 'College of American Pathologists' },
  { name: 'JCI Accredited', description: 'Joint Commission International' }
];

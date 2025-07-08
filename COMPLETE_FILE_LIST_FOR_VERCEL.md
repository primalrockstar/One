# Complete File List for ProMedix EMS Vercel Deployment

## Root Level Files (Required)
1. `package.json` - Dependencies and scripts
2. `package-lock.json` - Exact dependency versions
3. `tsconfig.json` - TypeScript configuration
4. `vite.config.ts` - Build configuration
5. `tailwind.config.ts` - Styling configuration
6. `postcss.config.js` - CSS processing
7. `drizzle.config.ts` - Database configuration
8. `components.json` - UI components config
9. `.gitignore` - Git ignore rules

## Client Folder Structure
```
client/
├── src/
│   ├── App-new.tsx (MAIN APP FILE)
│   ├── components/
│   │   └── ui/ (UI components)
│   ├── lib/
│   │   ├── utils.ts
│   │   └── queryClient.ts
│   └── hooks/
│       └── use-toast.ts
├── public/
│   ├── index.html
│   ├── landing.html
│   └── static-preview.html
└── dist/ (built files)
```

## Server Folder Structure
```
server/
├── index.ts (MAIN SERVER FILE)
├── routes.ts (API ROUTES)
├── storage.ts (DATA MANAGEMENT)
└── vite.ts (DEV SERVER)
```

## Shared Folder
```
shared/
└── schema.ts (DATABASE SCHEMA)
```

## Essential Files in Priority Order:

### 1. Core Application Files
- `client/src/App-new.tsx` - Main React application
- `server/index.ts` - Express server
- `server/routes.ts` - API endpoints
- `shared/schema.ts` - Database schema

### 2. Configuration Files
- `package.json` - Must include all dependencies
- `vite.config.ts` - Build settings
- `tsconfig.json` - TypeScript settings
- `tailwind.config.ts` - Styling

### 3. UI Components
- `client/src/components/ui/` - All UI components
- `client/src/lib/utils.ts` - Utility functions
- `client/src/hooks/use-toast.ts` - Toast notifications

### 4. Public Assets
- `client/public/index.html` - Main HTML file
- `client/public/landing.html` - Landing page
- Any image assets

### 5. Database & Storage
- `server/storage.ts` - Data management
- `drizzle.config.ts` - Database config

## Minimum Required Files (Essential Only):
If you want to start minimal:
1. `package.json`
2. `client/src/App-new.tsx`
3. `server/index.ts`
4. `server/routes.ts`
5. `shared/schema.ts`
6. `vite.config.ts`
7. `tailwind.config.ts`

## Upload Process:
1. Create folder: `promedix-ems`
2. Add all files above in correct structure
3. Upload entire folder to Vercel
4. Vercel builds automatically

Do you have these files from your migration package?
# Logo Files

Your Blue Wave Laundry logo files are already in place:

## Logo Files

1. **5.png** - White and teal version

   - Use for: Light backgrounds where you want teal accent
   - Variant: `white-teal`

2. **6.png** - White and royal blue version

   - Use for: Light backgrounds (navbar, hero sections)
   - Variant: `white-royal-blue`
   - **Currently used in Navbar**

3. **7.png** - Full white monochromatic version
   - Use for: Dark backgrounds (footer, dark sections)
   - Variant: `white-only`
   - **Currently used in Footer**

## Usage in Components

The Logo component supports these variants:

```tsx
// White and royal blue (default for light backgrounds)
<Logo variant="white-royal-blue" />

// White and teal
<Logo variant="white-teal" />

// Full white (for dark backgrounds)
<Logo variant="white-only" />
```

## Current Implementation

- **Navbar**: Uses `white-royal-blue` variant (6.png)
- **Footer**: Uses `white-only` variant (7.png)

You can change variants in `components/Navbar.tsx` and `components/Footer.tsx` if needed.

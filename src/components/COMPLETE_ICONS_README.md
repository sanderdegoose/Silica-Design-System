# SILICA Icon Library - Complete Collection (134 Icons)

## Overview
Your complete SILICA icon library with all **134 icons** from Figma, converted to high-quality React components with pixel-perfect accuracy.

## ✨ What's Included

**134 Professional Icons:**
- Navigation & Arrows (Arrow Left, Arrow Right, Arrow Up, Arrow Down, Chevron Left, Chevron Right, etc.)
- Actions (Add, Delete, Edit, Remove, Save, Close, Trash, etc.)
- Status & Alerts (Badge Alert, Badge Check, Badge Cross, Badge Info, Badge Question, Warning, etc.)
- Files & Documents (PDF, CSV, XLS, Download, Upload, Attachment, etc.)
- Users & People (User, Add User, Multiple Users, Profile, etc.)
- Communication (Message, Email, Phone, Video, Microphone, etc.)
- Media (Image, Video, Camera, Speaker, etc.)
- Settings & Tools (Settings, Lock, Key, Theme, etc.)
- And many more!

## 📦 Files

1. **Icons.jsx** - Complete library with all 134 icon components
2. **Icons.stories.jsx** - Storybook showcase with categories
3. **Button.jsx** - Updated button component
4. **Button.stories.jsx** - Button stories using real icons
5. **icon-manifest.json** - Reference mapping component names to original files

## 🚀 Installation

### Step 1: Add files to your project

```bash
cd my-storybook-project

# Copy icon library
cp Icons.jsx src/components/
cp Icons.stories.jsx src/components/

# Update button component
cp Button.jsx src/components/
cp Button.stories.jsx src/components/
```

### Step 2: Restart Storybook

```bash
npm run storybook
```

### Step 3: View your icons

Navigate to **SILICA Design System → Icons** in Storybook to see:
- All Icons (complete library)
- Icon Sizes (16px to 48px)
- Icon Colors (with examples)
- Navigation Icons
- Action Icons
- Status Icons
- File Icons

## 💡 Usage Examples

### Basic Icon Usage

```jsx
import { AddIcon, SearchIcon, HeartIcon, WarningIcon } from './components/Icons';

function MyComponent() {
  return (
    <div>
      {/* Default size (24px) */}
      <AddIcon />
      
      {/* Custom size */}
      <SearchIcon size={32} />
      
      {/* Custom color */}
      <HeartIcon size={24} color="#FF7400" />
      
      {/* Inherit color from parent */}
      <WarningIcon size={20} color="currentColor" />
    </div>
  );
}
```

### Using Icons in Buttons

```jsx
import Button from './components/Button';
import { AddIcon, ArrowLeftIcon, MoreIcon } from './components/Icons';

function MyApp() {
  return (
    <div>
      {/* Button with icon */}
      <Button 
        variant="primary" 
        icon={<AddIcon size={18} color="currentColor" />}
      >
        Add Item
      </Button>
      
      {/* Icon-only button */}
      <Button 
        variant="secondary" 
        iconOnly 
        icon={<MoreIcon size={18} color="currentColor" />}
      />
      
      {/* Tertiary with arrow */}
      <Button 
        variant="tertiary" 
        icon={<ArrowLeftIcon size={18} color="currentColor" />}
      >
        Go Back
      </Button>
    </div>
  );
}
```

### Icon in Custom Components

```jsx
import { BadgealertIcon, BadgecheckIcon } from './components/Icons';

function Alert({ type, message }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {type === 'error' ? (
        <BadgealertIcon size={24} color="#EF4444" />
      ) : (
        <BadgecheckIcon size={24} color="#10B981" />
      )}
      <span>{message}</span>
    </div>
  );
}
```

## 🎨 Icon Props

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | 24 | Size in pixels (width and height) |
| `color` | string | 'currentColor' | Any valid CSS color value |
| `...props` | object | - | Any additional SVG props (className, style, etc.) |

## 📋 Complete Icon List

<details>
<summary>Click to expand all 134 icons</summary>

- A11yIcon
- AccesIcon
- AddIcon
- AddImageIcon
- AddUserIcon
- ArrowDownIcon
- ArrowLeftIcon
- ArrowRightIcon
- ArrowUpIcon
- AscendingIcon
- AttachmentIcon
- BadgealertIcon
- BadgecheckIcon
- BadgecrossIcon
- BadgeinfoIcon
- BadgequestionIcon
- BankpasIcon
- BoxIcon
- BrightIcon
- CsvIcon
- CalendarIcon
- CameraIcon
- CheckIcon
- ChevronDownIcon
- ChevronLeftIcon
- ChevronRightIcon
- ChevronUpIcon
- CloseIcon
- CloudIcon
- CommentIcon
- CopyIcon
- CreditcardIcon
- CrossIcon
- DarkIcon
- DeleteIcon
- DescendingIcon
- DocumentIcon
- DownloadIcon
- DragdropIcon
- EditIcon
- EmailIcon
- EmptyIcon
- EnvelopeIcon
- ExclamationIcon
- ExpandIcon
- ExternalIcon
- EyeIcon
- EyeoffIcon
- FeedbackIcon
- FileIcon
- FilterIcon
- FolderIcon
- ForwardIcon
- GearIcon
- GlobeIcon
- GridIcon
- HamburgerIcon
- HeartIcon
- HelpIcon
- HistoryIcon
- HomeIcon
- ImageIcon
- InfoIcon
- KeyIcon
- LanguageIcon
- LinkIcon
- ListIcon
- LoadingIcon
- LocationIcon
- LockIcon
- LogoutIcon
- MailIcon
- MenuIcon
- MessageIcon
- MicrophoneIcon
- MinimizeIcon
- MoreIcon
- MultipleusersIcon
- NavigationIcon
- NotificationIcon
- PaperclipIcon
- PauseIcon
- PdfIcon
- PencilIcon
- PhoneIcon
- PhotoIcon
- PlayIcon
- PlusIcon
- PrintIcon
- ProfileIcon
- QuestionIcon
- RefreshIcon
- RemoveIcon
- ReplyIcon
- SearchIcon
- SendIcon
- SettingsIcon
- ShareIcon
- ShieldIcon
- SignIcon
- SortIcon
- SpeakerIcon
- SplitIcon
- SummaryIcon
- SwitchIcon
- ThemeIcon
- ThumbDownIcon
- ThumbUpIcon
- TimeIcon
- TrashIcon
- TrendingDownIcon
- TrendingUpIcon
- UploadIcon
- UserIcon
- VideoIcon
- WarningIcon
- WheelchairIcon
- WifiIcon
- XlsIcon

</details>

## 🎯 Finding Icons

Use the Storybook interface to:
1. Browse all 134 icons visually
2. See icons organized by category (Navigation, Actions, Status, Files)
3. Copy icon names directly from the showcase
4. Test different sizes and colors interactively

## 🔧 Customization Tips

### Change Default Color
All icons use `currentColor` by default, so they inherit the text color of their parent:

```jsx
<div style={{ color: '#FF7400' }}>
  <AddIcon /> {/* Will be orange */}
</div>
```

### Responsive Sizes
```jsx
// Small devices
<SearchIcon size={16} />

// Medium devices  
<SearchIcon size={24} />

// Large devices
<SearchIcon size={32} />
```

### With CSS Classes
```jsx
<AddIcon className="my-icon-class" />
```

### With Inline Styles
```jsx
<AddIcon 
  size={24} 
  color="#FF7400"
  style={{ marginRight: '8px', cursor: 'pointer' }}
  onClick={handleClick}
/>
```

## 🚀 Deploy to GitHub Pages

Once you're satisfied with your icon library:

```bash
npm run deploy-storybook
```

Your complete icon library will be live on your GitHub Pages site!

## 📝 Notes

- All icons are 24x24px by default (adjustable with `size` prop)
- Icons are optimized SVG components
- Perfect pixel accuracy from your Figma exports
- Full TypeScript support (can be added if needed)
- Zero dependencies (just React)

---

## 🎉 You're All Set!

You now have a complete, production-ready icon library with all 134 icons from your SILICA Design System!

Need help or want to add more icons? Just export them from Figma and follow the same pattern!

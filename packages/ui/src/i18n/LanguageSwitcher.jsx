import { useTranslation } from 'react-i18next'
import { Button, Typography } from '@mui/material'
import { IconLanguage } from '@tabler/icons-react'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'zh' ? 'en' : 'zh'
        i18n.changeLanguage(newLang)
    }

    return (
        <Button
            onClick={toggleLanguage}
            sx={{
                color: 'inherit',
                textTransform: 'none',
                minWidth: 'auto',
                gap: 0.5,
                px: 1
            }}
            title={i18n.language === 'zh' ? 'Switch to English' : '切换为中文'}
        >
            <IconLanguage size={20} />
            <Typography variant='caption' sx={{ fontWeight: 600 }}>
                {i18n.language === 'zh' ? 'EN' : '中'}
            </Typography>
        </Button>
    )
}

export default LanguageSwitcher

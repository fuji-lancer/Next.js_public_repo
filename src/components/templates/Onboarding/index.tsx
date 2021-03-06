import { memo, VFC } from 'react';
import Link from 'next/link';
import {
  Box,
  Text,
  Stack,
  List,
  ListIcon,
  ListItem,
  Link as ChakraLink,
  AspectRatio,
  Grid,
  BoxProps,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import NormalButton from 'components/atoms/NormalButton';
import { OptimizedImage } from 'components/atoms/OptimizedImage';
import { HookState } from 'hooks/pages/useOnboardingPage';
import { BrandContent } from 'components/molecules/BrandContent';
import { SafeSecureIconGrid } from 'components/molecules/SafeSecureIconGrid';

type Props = HookState & BoxProps;

const Component: VFC<Props> = ({ pickupBrands, pickupProducts, ...rest }) => {
  return (
    <Box px="8" pt="20px" pb="5" maxW="container.sm" mx="auto" {...rest} >
      <AspectRatio ratio={4.65277778}>
        <OptimizedImage
          src="/Banner/BannerOnboardingCampaign.jpg"
          fallbackSrc="/Fallback/FallbackRectangle.svg"
          layout="fill"
          objectFit="contain"
        />
      </AspectRatio>
      <Box pt="10">
        <Box bg="primary.200" borderRadius="4px" textAlign="center">
          <Text textStyle="h5" py="6px">
            ð ã³ã¹ã¡ ããã©ã³ãããã¯ãããã¯ã«ï¼
          </Text>
        </Box>
        <Box py="2">
          <Grid gridTemplateColumns="repeat(4, 1fr)" borderColor="inherit">
            {pickupProducts.map((product, index) => (
              <AspectRatio borderRadius={2} ratio={1.343} overflow="hidden" key={index}>
                <OptimizedImage
                  src={product.imagePath}
                  alt={product.name}
                  objectFit="contain"
                  layout="fill"
                  fallbackSrc="/Fallback/FallbackRectangle.svg"
                />
              </AspectRatio>
            ))}
          </Grid>
        </Box>
        <Box py="2">
          <Text textStyle="h9" fontSize="12px">
            Pantriiä¼å¡ãªããå®é¡ã§ã³ã¹ã¡ããã©ã³ãããã°ãå¸ä¾¡æ ¼ã«è¿ãããã¯ãªå¤æ®µã§ãè²·ãæ±ãé ãã¾ãã
          </Text>
        </Box>
      </Box>
      <Box pt="10">
        <Box bg="primary.200" borderRadius="4px" textAlign="center">
          <Text textStyle="h5" py="6px">
            ð äººæ°ãã©ã³ãå¤æ°ï¼è±å¯ãªååã®åæã
          </Text>
        </Box>
        <Box py="2">
          <Grid
            gridTemplateColumns="repeat(4, 1fr)"
            borderColor="inherit"
            backgroundColor="#EEEEEE"
          >
            {pickupBrands.map((brand, index) => (
              <AspectRatio borderRadius={2} ratio={1.343} overflow="hidden" key={index}>
                <OptimizedImage
                  src={brand.imagePath}
                  alt={brand.name}
                  objectFit="contain"
                  layout="fill"
                  fallbackSrc="/Fallback/FallbackRectangle.svg"
                />
              </AspectRatio>
            ))}
          </Grid>
        </Box>
        <Box py="2">
          <Text textStyle="h9" fontSize="12px">
            DiorãChanelãªã©ã®äººæ°ãã©ã³ããå§ãã¨ããå¤ãã®ååãåãæãã¦ãã¾ãã
          </Text>
        </Box>
      </Box>
      <Box pt="10">
        <Box bg="primary.200" borderRadius="4px" textAlign="center">
          <Text textStyle="h5" py="6px">
            ð å®å¿å®å¨ã«ãè²·ãç©ã§ããåãçµã¿
          </Text>
        </Box>
        <Box py="2">
          <SafeSecureIconGrid my="5" />
        </Box>
      </Box>
    </Box>
  );
};
export const OnboadingTemplate = memo(Component);

#!/usr/bin/env python3
"""
Image to WebP Converter Script
Converts images to WebP format with specified maximum height while maintaining aspect ratio.
"""

import os
import sys
from PIL import Image
import argparse
from pathlib import Path

def convert_to_webp(input_path, output_dir, max_height, quality=85):
    """
    Convert an image to WebP format with specified max height.
    
    Args:
        input_path (str): Path to input image
        output_dir (str): Directory to save converted images
        max_height (int): Maximum height for the output image
        quality (int): WebP quality (1-100, default 85)
    """
    try:
        # Open the image
        with Image.open(input_path) as img:
            # Get original dimensions
            original_width, original_height = img.size
            
            # Calculate new dimensions maintaining aspect ratio
            if original_height > max_height:
                # Calculate new width based on aspect ratio
                aspect_ratio = original_width / original_height
                new_height = max_height
                new_width = int(new_height * aspect_ratio)
                
                # Resize the image
                img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            else:
                # Image is already smaller than max height, no resize needed
                img_resized = img.copy()
            
            # Convert RGBA to RGB if necessary (WebP supports RGBA, but some issues might occur)
            if img_resized.mode == 'RGBA':
                # Create white background
                background = Image.new('RGB', img_resized.size, (255, 255, 255))
                background.paste(img_resized, mask=img_resized.split()[-1])  # Use alpha channel as mask
                img_resized = background
            elif img_resized.mode not in ('RGB', 'L'):
                img_resized = img_resized.convert('RGB')
            
            # Generate output filename
            input_filename = Path(input_path).stem
            output_path = os.path.join(output_dir, f"{input_filename}.webp")
            
            # Save as WebP
            img_resized.save(output_path, 'WebP', quality=quality, optimize=True)
            
            print(f"✓ Converted: {input_path} -> {output_path}")
            print(f"  Original: {original_width}x{original_height} -> New: {img_resized.size[0]}x{img_resized.size[1]}")
            
    except Exception as e:
        print(f"✗ Error converting {input_path}: {str(e)}")

def main():
    parser = argparse.ArgumentParser(description='Convert images to WebP format with specified max height')
    parser.add_argument('input', help='Input file or directory containing images')
    parser.add_argument('max_height', type=int, help='Maximum height for output images')
    parser.add_argument('-o', '--output', default='./CT-headers', help='Output directory (default: ./CT-headers)')
    parser.add_argument('-q', '--quality', type=int, default=85, help='WebP quality 1-100 (default: 85)')
    
    args = parser.parse_args()
    
    # Validate quality parameter
    if not 1 <= args.quality <= 100:
        print("Error: Quality must be between 1 and 100")
        sys.exit(1)
    
    # Create output directory if it doesn't exist
    os.makedirs(args.output, exist_ok=True)
    
    # Supported image formats
    supported_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.gif', '.webp'}
    
    input_path = Path(args.input)
    
    if input_path.is_file():
        # Single file conversion
        if input_path.suffix.lower() in supported_formats:
            convert_to_webp(str(input_path), args.output, args.max_height, args.quality)
        else:
            print(f"Error: Unsupported file format. Supported formats: {', '.join(supported_formats)}")
    
    elif input_path.is_dir():
        # Directory conversion
        image_files = []
        for ext in supported_formats:
            image_files.extend(input_path.glob(f'*{ext}'))
            image_files.extend(input_path.glob(f'*{ext.upper()}'))
        
        if not image_files:
            print(f"No supported image files found in {input_path}")
            sys.exit(1)
        
        print(f"Found {len(image_files)} image(s) to convert...")
        print(f"Max height: {args.max_height}px")
        print(f"Quality: {args.quality}")
        print(f"Output directory: {args.output}")
        print("-" * 50)
        
        converted = 0
        for image_file in sorted(image_files):
            convert_to_webp(str(image_file), args.output, args.max_height, args.quality)
            converted += 1
        
        print("-" * 50)
        print(f"Conversion complete! {converted} images converted.")
    
    else:
        print(f"Error: {input_path} is not a valid file or directory")
        sys.exit(1)

if __name__ == "__main__":
    main()
